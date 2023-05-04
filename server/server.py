from flask import Flask, render_template, redirect, request, url_for
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'il-tuo-segreto'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)

# modello utente
class User(UserMixin):
    def __init__(self, id, email, password):
        self.id = id
        self.email = email
        self.password = password

# database utenti
users = {
    1: User(1, 'email1@example.com', 'password1'),
    2: User(2, 'email2@example.com', 'password2')
}

# form di registrazione
class RegisterForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Register')

# form di login
class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

# gestione registrazione
@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        # creazione nuovo utente
        user_id = max(users.keys()) + 1
        user = User(user_id, form.email.data, form.password.data)
        users[user_id] = user
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

# gestione login
@login_manager.user_loader
def load_user(user_id):
    return users.get(int(user_id))

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # verifica utente esistente
        email = form.email.data
        password = form.password.data
        for user in users.values():
            if user.email == email and user.password == password:
                login_user(user)
                return redirect(url_for('index'))
            return 'Invalid email or password'
        return render_template('login.html', form=form)


# gestione logout
@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

# pagina principale del social network (accessibile solo agli utenti autenticati)
@app.route('/')
@login_required
def index():
    return render_template('index.html')



# 2. Creazione di post:

# Per la creazione di post, puoi definire un modello Post e utilizzare il pacchetto Flask-SQLAlchemy per la gestione del database.

# from flask_sqlalchemy import SQLAlchemy
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'
# db = SQLAlchemy(app)

# modello post
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Post('{self.title}', '{self.content}')"

# form di creazione post
class PostForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    content = StringField('Content', validators=[DataRequired()])
    submit = SubmitField('Create Post')

# gestione creazione post
@app.route('/create_post', methods=['GET', 'POST'])
@login_required
def create_post():
    form = PostForm()
    if form.validate_on_submit():
        # creazione nuovo post
        post = Post(title=form.title.data, content=form.content.data, user_id=current_user.id)
        db.session.add(post)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('create_post.html', form=form)

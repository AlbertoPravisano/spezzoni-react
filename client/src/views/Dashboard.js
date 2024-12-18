import React from "react";
import { connect, useDispatch } from "react-redux";
import { getUserSpezzoni } from "../redux/spezzoni";
import { Grid, Header, Icon, Input } from "semantic-ui-react";

const Dashboard = ({ user, spezzoni }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!spezzoni) {
      dispatch(getUserSpezzoni(user.uid));
    }
  }, [dispatch, spezzoni, user.uid]);

  return (
    <div>
      <Header as="h2">
        <Icon name="user" />
        <Header.Content>Profilo di {user.name}</Header.Content>
      </Header>
      <Grid columns="equal">
        <Grid.Row stretched>
          <Grid.Column>
            <Input value={user.name} fluid />
          </Grid.Column>
          <Grid.Column>
            <Input value={user.surname} fluid />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Input value={user.city} fluid />
          </Grid.Column>
          <Grid.Column>
            <Input value={user.phone} fluid />
          </Grid.Column>
          <Grid.Column>
            <Input value={user.email} fluid />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>{JSON.stringify(spezzoni)}</Grid.Row>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
  spezzoni: state.spezzoni.data,
});

export default connect(mapStateToProps)(Dashboard);

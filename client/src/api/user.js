import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import * as firebaseAuth from "firebase/auth";
import { db, auth } from "./firebase";

export const register = async ({ email, psw, ...otherFields }) => {
  try {
    const { user } = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      psw
    );
    const userRef = doc(db, "/users", user.uid);
    const data = {
      email,
      name: otherFields.name,
      surname: otherFields.surname,
      phone: otherFields.phone,
      birthday: otherFields.birthday,
      city: otherFields.city,
    };
    console.log("register auth: ", user, data);
    await setDoc(userRef, data);
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const signin = async (email, password) => {
  try {
    const { user } = await firebaseAuth.signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("auth.user", user);
    const userRef = doc(db, "/users", user.uid);
    const userSnap = await getDoc(userRef);
    console.log("user: ", userSnap.data());
    return userSnap.data();
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      console.error("Error user not found:", error);
    } else {
      console.error("Error signing in:", error);
    }
  }
};

export const updateUserData = async (user) => {
  const userRef = doc(db, "users", user.uid);

  try {
    await updateDoc(userRef, user);
  } catch (error) {
    console.error("Error updating preferences: ", error);
    throw error;
  }
};

export async function resetEmail(email) {
  try {
    await firebaseAuth.sendSignInLinkToEmail(auth, email, {
      url: "http://spezzoni.com",
      handleCodeInApp: true,
    });
    console.log("Email sent for email reset.");
  } catch (error) {
    console.error("Error sending email reset link:", error);
  }
}

export async function resetPassword(email) {
  try {
    await firebaseAuth.sendPasswordResetEmail(auth, email);
    console.log("Email sent for password reset.");
  } catch (error) {
    console.error("Error sending password reset link:", error);
  }
}

export const signout = async () => await firebaseAuth.signOut(auth);

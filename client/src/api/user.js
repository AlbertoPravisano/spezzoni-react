import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  sendPasswordResetEmail,
} from "firebase/auth";
import { db, auth } from "./firebase";

export const handleAuth = async (email, password, ...otherFields) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const userRef = doc(db, "/users", user.uid);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const userRef = doc(db, "/users", user.uid);
        await setDoc(userRef, { email, ...otherFields });
        return user;
      } catch (error) {
        console.error("Error creating user:", error);
        // Handle errors appropriately
      }
    } else {
      console.error("Error signing in:", error);
      // Handle errors appropriately
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
    await sendSignInLinkToEmail(auth, email, {
      url: "http://your-app-url.com", // Replace with your app's URL
      handleCodeInApp: true,
    });
    console.log("Email sent for email reset.");
    // You might want to display a message to the user
  } catch (error) {
    console.error("Error sending email reset link:", error);
    // Handle errors appropriately
  }
}

export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Email sent for password reset.");
    // You might want to display a message to the user
  } catch (error) {
    console.error("Error sending password reset link:", error);
    // Handle errors appropriately
  }
}

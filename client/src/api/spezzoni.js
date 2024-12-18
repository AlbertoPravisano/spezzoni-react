import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const getAllSpezzoni = async () => {
  const snapshot = await getDocs(collection(db, "spezzoni"));
  const spezzoni = snapshot.docs.map((doc) => doc.data());

  return spezzoni;
};

export const getUserSpezzoni = async (userId) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "spezzoni"), where("userId", "==", userId))
    );

    const spezzoniList = [];
    querySnapshot.forEach((doc) => {
      spezzoniList.push({ id: doc.id, ...doc.data() });
    });

    return spezzoniList;
  } catch (error) {
    console.error("Error getting spezzoni by userId:", error);
    return []; // Return an empty array on error
  }
};

export const getSpezzoniByName = async (searchString) => {
  try {
    const q = query(
      collection(db, "spezzoni"),
      where("name", "==", searchString)
    );
    const querySnapshot = await getDocs(q);

    const spezzoniList = [];
    querySnapshot.forEach((doc) => {
      spezzoniList.push({ id: doc.id, ...doc.data() });
    });

    return spezzoniList;
  } catch (error) {
    console.error("Error getting spezzoni by name substring:", error);
    return []; // Return an empty array on error
  }
};

export const addSpezzone = async ({ name, userId, quantity }) => {
  try {
    const docRef = await addDoc(collection(db, "spezzoni"), {
      name,
      userId,
      quantity,
      aviable: true,
    });
    return { name, userId, quantity, aviable: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding spezzoni:", error);
    return null; // Return null on error
  }
};

export const deleteSpezzone = async (spezzoneId) => {
  try {
    await deleteDoc(doc(db, "spezzoni", spezzoneId));
    console.log("Document with ID: ", spezzoneId, " deleted successfully");
  } catch (error) {
    console.error("Error removing spezzoni:", error);
  }
};

export const setSpezzoneSelled = async (spezzoniId) => {
  try {
    await updateDoc(doc(db, "spezzoni", spezzoniId), { aviable: false });
    console.log("Document with ID: ", spezzoniId, " updated successfully");
  } catch (error) {
    console.error("Error updating spezzoni:", error);
  }
};

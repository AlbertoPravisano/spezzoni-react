import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const getAllSpezzoni = async () => {
  const spezzoniRef = collection(db, "spezzoni");

  const snapshot = await getDocs(spezzoniRef);
  const spezzoni = snapshot.docs.map((doc) => doc.data());

  return spezzoni;
};

export const getUserSpezzoni = async (userId) => {
  try {
    const spezzoniRef = collection(db, "spezzoni");
    const querySnapshot = await getDocs(
      query(spezzoniRef, where("userId", "==", userId))
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
    const spezzoniRef = collection(db, "spezzoni");
    const q = query(spezzoniRef, where("name", "==", searchString));
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
    const spezzoniRef = collection(db, "spezzoni");
    const docRef = await addDoc(spezzoniRef, {
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

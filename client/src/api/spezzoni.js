import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getAllSpezzoni = async () => {
  const spezzoniRef = collection(db, "spezzoni");

  const snapshot = await getDocs(spezzoniRef);
  const spezzoni = snapshot.docs.map((doc) => doc.data());

  return spezzoni;
};

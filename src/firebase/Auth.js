import app from "./config";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(app);

export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

export const logIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const getCurrentUserUid = () => {
  const user = auth.currentUser;
  return user ? user.uid : null;
};

export default auth;

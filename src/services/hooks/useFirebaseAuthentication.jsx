import React, { useState, useEffect } from "react";
import firebaseApp from "../firebase/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const useFirebaseAuthentication = () => {
  const [user, setUser] = useState(null);

  async function getPokemons(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().pokemons;
    return infoFinal;
  }

  function setUserWithFirebase(usuarioFirebase) {
    const userData = {
      uid: usuarioFirebase.uid,
      email: usuarioFirebase.email,
    };

    setUser(userData);
  }

  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unlisten();
    };
  }, []);

  return user;
};

export default useFirebaseAuthentication;

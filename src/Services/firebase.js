import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA62ycl8EveOWip4NXa90rQqhD8tA8ZK9I",
  authDomain: "react34765-e882e.firebaseapp.com",
  projectId: "react34765-e882e",
  storageBucket: "react34765-e882e.appspot.com",
  messagingSenderId: "456812623979",
  appId: "1:456812623979:web:f09062d60a54547bced92e"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getProducts(categoryId){
  let collectionRef = collection(db, "Suplementos");

  if (categoryId) {
    collectionRef = query(collectionRef, where("category", "==", categoryId));
  }

  let results = await getDocs(collectionRef);
  let dataSuplementos = results.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });

  return dataSuplementos;
};

export async function getProduct(id) {
  const docRef = doc(db, "Suplementos", id);
  const docResult = await getDoc(docRef);

  if (docResult.exists()) {
    return {
      id: docResult.id,
      ...docResult.data()
    };
  } else {
    throw new Error("El item no se encontró en la base de datos.")
  }
};

export async function newOrder(orderData) {
  const orderCollection = collection(db, "Orders");

  const docResult = await addDoc(orderCollection, orderData);
  return docResult.id;
}


export default FirebaseApp;  

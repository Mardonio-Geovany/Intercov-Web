// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwXbpkJ3oLHUH5uoEUiz2I9mOefYdeeNs",
  authDomain: "webintercov.firebaseapp.com",
  projectId: "webintercov",
  storageBucket: "webintercov.appspot.com",
  messagingSenderId: "82044603295",
  appId: "1:82044603295:web:1b5d2e9f1a083ecf930baa",
  measurementId: "G-Y0F0M6ZJ21"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Function to get data from the collection "ZonasCobertura"
async function getZonasCobertura() {
  try {
    const zonasCollection = collection(db, "ZonasCobertura");
    const zonasSnapshot = await getDocs(zonasCollection);
    const zonasList = zonasSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return zonasList;
  } catch (error) {
    console.error("Error fetching data from ZonasCobertura:", error);
    throw error;
  }
}

// Function to get data from the collection "Contacto"
async function getContacto() {
  try {
    const contactoCollection = collection(db, "Contacto");
    const contactoSnapshot = await getDocs(contactoCollection);
    const contactoList = contactoSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return contactoList;
  } catch (error) {
    console.error("Error fetching data from Contacto:", error);
    throw error;
  }
}

// Usage examples
getZonasCobertura().then(zonas => {
  console.log("ZonasCobertura:", zonas);
}).catch(err => {
  console.error("Error fetching ZonasCobertura data:", err);
});

getContacto().then(contactos => {
  console.log("Contacto:", contactos);
}).catch(err => {
  console.error("Error fetching Contacto data:", err);
});

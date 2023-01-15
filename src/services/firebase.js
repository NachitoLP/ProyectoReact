import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDrhUwIYfqnjavqIO5eZP3Zpvvwho5AFYw",
    authDomain: "proyectoreactt.firebaseapp.com",
    projectId: "proyectoreactt",
    storageBucket: "proyectoreactt.appspot.com",
    messagingSenderId: "824196241386",
    appId: "1:824196241386:web:9d48cb80a293d5db490493"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export async function getItemDetail(id) {
    let product =  doc(DB, "products", id);

    let snapshot = await getDoc(product);
    let item = snapshot.data();
    item.id = snapshot.id;
    return item;
}

export async function itemsGeneral() {
    let collectionRef = collection(DB, "products");
    let snapshots = await getDocs(collectionRef);

    let itemsArray = snapshots.docs;
    let items = itemsArray.map ( (doc) => {
        return {...doc.data(), id: doc.id}
    })

    return items;
}

export async function getItemCategory(catID) {
    let collectionRefCat = collection(DB, "products");
    let q = query(collectionRefCat, where("categoria", "==", catID));
    let snapshotsCat = await getDocs(q);

    let itemsArrayCat = snapshotsCat.docs;
    let itemsCat = itemsArrayCat.map ( (doc) => {
        return {...doc.data(), id: doc.id}
    })

    return itemsCat;
}


export async function createCheckout(orden) {
    let collectionRefOrd = collection(DB, "compras");
    let newOrder = await addDoc(collectionRefOrd, orden);

    return newOrder.id;
}

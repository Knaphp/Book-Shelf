import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrVUZRCzZoyyg78iJyskXVNdNHLslV3VI",
  authDomain: "kanabook-e04f4.firebaseapp.com",
  projectId: "kanabook-e04f4",
  storageBucket: "kanabook-e04f4.firebasestorage.app",
  messagingSenderId: "990461210705",
  appId: "1:990461210705:web:2679b0f4cd817edc28c870",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

// Best-effort offline cache so the app still works briefly without a
// connection. Safe to ignore failures (e.g. multiple tabs open).
try {
  enableIndexedDbPersistence(db);
} catch (e) {
  // ignore — app still works online-only
}

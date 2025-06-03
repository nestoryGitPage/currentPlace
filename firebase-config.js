import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdksCx9g0PCgJp0Ds1H1NxT8QiI0P2teA",
  authDomain: "fbv10test.firebaseapp.com",
  databaseURL: "https://fbv10test-default-rtdb.firebaseio.com",
  projectId: "fbv10test",
  storageBucket: "fbv10test.appspot.com",
  messagingSenderId: "691906358085",
  appId: "1:691906358085:web:f0cedfda498ffcdba4ec2c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };

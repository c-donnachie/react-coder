import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkP9X3leHPOuBkGRRpafAd7sZpXEi_ivE",
  authDomain: "clase-react-f5db7.firebaseapp.com",
  projectId: "clase-react-f5db7",
  storageBucket: "clase-react-f5db7.appspot.com",
  messagingSenderId: "1026249159085",
  appId: "1:1026249159085:web:7dd462f300696b12d03124"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
)

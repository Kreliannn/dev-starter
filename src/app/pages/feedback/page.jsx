"use client"
import { useState } from "react";
import { TextField, Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyClpggSiin_WXHwlc0AM-jUiwZK_4DENHs",
  authDomain: "test-c6a7a.firebaseapp.com",
  projectId: "test-c6a7a",
  storageBucket: "test-c6a7a.firebasestorage.app",
  messagingSenderId: "236410288126",
  appId: "1:236410288126:web:ff00bd9636ad60e20772af"
};

const app = initializeApp(firebaseConfig);

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
})


const db = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'feedbacks');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

export default function FeedbackForm() {

    let [msg, setMsg] = useState("")

    let submit = async (msg) => {
        if(msg == "") return alert("empty")
        await addDoc(collection(db, "feedbacks"), {
            msg : msg
        })
        
    }

  return (
    <ThemeProvider theme={theme}>
      <div className="flex items-center justify-center bg-gray-100" style={{height : "90dvh"}}>
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-black">Feedback / Concern Form</h1>
          <div className="space-y-6">
            <TextField
              multiline
              rows={10}
              variant="outlined"
              fullWidth
              placeholder="Please enter your feedback or concern here..."
              className="w-full"
              InputProps={{
                className: "border-black focus:border-black focus:ring-black",
              }}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className="w-full max-w-md py-3 text-lg"
                onClick={() => submit(msg)}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}


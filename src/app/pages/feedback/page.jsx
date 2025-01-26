"use client"
import Swal from "sweetalert2"
import { useState } from "react"
import { TextField, Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyClpggSiin_WXHwlc0AM-jUiwZK_4DENHs",
  authDomain: "test-c6a7a.firebaseapp.com",
  projectId: "test-c6a7a",
  storageBucket: "test-c6a7a.firebasestorage.app",
  messagingSenderId: "236410288126",
  appId: "1:236410288126:web:ff00bd9636ad60e20772af",
}

const app = initializeApp(firebaseConfig)

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

const db = getFirestore(app)

async function getCities(db) {
  const citiesCol = collection(db, "feedbacks")
  const citySnapshot = await getDocs(citiesCol)
  const cityList = citySnapshot.docs.map((doc) => doc.data())
  return cityList
}

export default function FeedbackForm() {
  const [msg, setMsg] = useState("")

  const submit = async (msg) => {
    if (msg == "") {
      Swal.fire({
        title: "empty field",
        text: "please provide message before submiting",
        customClass: {
          confirmButton: "bg-black w-80",
        },
      })

      return
    }
    await addDoc(collection(db, "feedbacks"), {
      msg: msg,
    })
    Swal.fire({
      title: "success",
      text: "We appreciate your feedback and we will use it to improve our services.",
      customClass: {
        confirmButton: "bg-black w-80",
      },
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="flex items-center justify-center bg-gray-100 " style={{height : "90dvh"}}>
        <div className="w-full max-w-6xl p-8 bg-white shadow-lg rounded-lg border-t border-b border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold mb-6 text-black text-center sm:text-start">Contact Us</h1>
              <ul className="list-disc pl-6 space-y-2 hidden sm:block">
                <li>
                    Adding library and dependencies in the website  
                    <p className="text-sm text-gray-500">Integrate essential tools and packages to enhance the functionality of the website.</p>
                </li>
                <li>
                    Submit feedback on the website  
                    <p className="text-sm text-gray-500">Share your thoughts and suggestions to help improve the user experience.</p>
                </li>
                <li>
                    Submit concerns  
                    <p className="text-sm text-gray-500">Report any issues or raise concerns to ensure smooth operation.</p>
                </li>
                <li>
                    Report bugs  
                    <p className="text-sm text-gray-500">Identify and notify us about bugs or errors for timely fixes.</p>
                </li>
                </ul>

            </div>
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
      </div>
    </ThemeProvider>
  )
}


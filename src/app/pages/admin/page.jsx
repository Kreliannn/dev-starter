  
import { Paper, List, ListItem, Typography } from "@mui/material"
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
const db = getFirestore(app)




export default async function SimpleMessageContainer() {

  let messages = []; 

  const citiesCol = collection(db, "feedbacks")
  const citySnapshot = await getDocs(citiesCol)
  const cityList = citySnapshot.docs.map((doc) => doc.data())
  messages = cityList
 

  return (
    <div className="bg-gray-900" style={{ width : "100%"}}>
      <Paper elevation={3} className="w-full  p-4 bg-white"  style={{ width : "100%"}}>
        <Typography variant="h5" component="h1" className="mb-4 text-center text-gray-800">
          Messages
        </Typography>
        <List className="space-y-2">
          {messages?.map((message, index) => (
            <ListItem
              key={index}
              className={`rounded-lg ${index % 2 === 0 ? "bg-gray-200" : "bg-black text-white"}`}
            >
              <Typography variant="body1" className={`py-2 px-3 ${index % 2 === 0 ? "text-gray-800" : "text-white"}`}>
                {message.msg}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  )
}


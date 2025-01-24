

export const express =`
import express from "express"
import cors from "cors"
import session from "express-session"
import passport from "passport"
import mongoose from "mongoose"
const app = express()

let mongoDb = "yourDatabase"
const PORT = process.env.PORT || 4000;

mongoose.connect(mongoDb).then(() => console.log("connected to database"))

app.set('trust proxy', 1); // Trust the first proxy
app.use(cors({
    origin: "https://request-system-frontend.vercel.app",
    credentials : true
}))
app.use(express.json())
app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized : false,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 * 7 ,
        httpOnly: true,
        sameSite: 'None',  // Allow cross-origin cookies
        secure : true
    }
}))
app.use(passport.initialize())
app.use(passport.session())

app.get("/",  (request, response)=> {
    response.send("hello world")
})



app.listen(PORT, () => console.log("express server is listening.............."))
`
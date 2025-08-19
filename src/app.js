import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// to connect the frontend to backend
app.use(cors({
  origin: process.env.CORS_ORIGIN, // to make sure that we only get the allowed requests from a defined source
  credentials:true
}));

//to use the json format of the req sent by the user
app.use(express.json({
  limit:"16kb"
}))

//for encoding of the url
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// for storing files in the public folder
app.use(express.static("public"))

// to store the cookies and interact with them makes cookies available as req.cookies
app.use(cookieParser())

export default app
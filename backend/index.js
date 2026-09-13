import dotenv from 'dotenv'
dotenv.config()

import ConnectDb from "./db/config.js";
import express from 'express'
const app = express()

app.listen(process.env.PORT,() => {
    ConnectDb()
      console.log(`Server is running on port htpp://localhost:3000`)
})
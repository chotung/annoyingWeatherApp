require("dotenv").config()
const express = require("express") 
const axios = require("axios")
const app = express()

const port = process.env.PORT || 6000




app.use("/", (req, res) => {
  console.log("I LOVE CODING")
})



app.listen(port, console.log(`Server is running on port ${port}`))
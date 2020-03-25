require("dotenv").config()
const express = require("express") 
const axios = require("axios")
const app = express()

const port = process.env.PORT || 6000




app.use("/weather", async (req, res) => {
  const response = await axios.get(`https://api.darksky.net/forecast/${process.env.WEATHER_API}/42.3601,-71.0589`)
  const weatherData = response.data
  res.json(weatherData)
})



app.listen(port, console.log(`Server is running on port ${port}`))
const express = require("express")
const app = express()
const PORT = 3001

// Custom modules
const { hero } = require("./routes")

app.use(express.static("assets"))
app.use("/css", express.static(__dirname + "assets/style"))
app.use("/script", express.static(__dirname + "assets/script"))

hero(app)


app.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`)
})



const hero = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/view/index.html")
    })
}

module.exports = { hero }
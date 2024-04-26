const express = require("express");

const router = express.Router()

router.get("/", (req, res) =>{
    res.send("This is from Student Page")
})

router.get("/newstd", (req, res) =>{
    res.send("This is from Student Page")
})

router.get("/result", (req, res) =>{
    res.send("This is from Student Page")
})

router.get("/data", (req, res) =>{
    res.send("This is from Student Page")
})

module.exports = router;
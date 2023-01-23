
const express = require("express");

const router = express.Router()

const courses = [
    {id: 1, nom: "course1"},
    {id: 2, nom: "course1"},
    {id: 3, nom: "course1"},
    {id:4, nom: "course1"}
]


router.get("/", (req, res)=>{
    res.send(courses)
})

module.exports = router



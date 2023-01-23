const { urlencoded } = require("express")

const express = require("express")
const Joi = require("joi")
const morgan = require("morgan")
const helmet = require("helmet")
const startupdebugger = require("debug")("app:startup")
const dbdebugger = require("debug")("app:db")

const config = require("config")
const logger = require("./midleware/logger.js")
const courses = require("./routes/courses")
const home = require("./routes/home")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static("blaise"))
app.use(logger)

console.log(config.get("name"))
console.log(config.get("mail.host"))
console.log(config.get("mail.password"))
app.use(helmet())

app.use(express.json())
if(app.get("env") === "development"){
    app.use(morgan("tiny"))
    startupdebugger("morgan enabled")
}


dbdebugger("connected to the database....")
//console.log(app.get("env"))
//console.log(process.env.NODE_ENV)
//app.use(express.json())



const  courseSchema = Joi.object({
    nom: Joi.string().min(3).max(5).required()
})





app.use("/api/courses", courses);
app.use("/", home)





const port = process.env.PORT || 4000
app.listen(port, ()=>console.log(`les choses marche deja ${port}`))


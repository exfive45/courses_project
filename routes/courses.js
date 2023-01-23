const express = require("express");

const router = express.Router();

const courses = [
    {id: 1, nom: "course1"},
    {id: 2, nom: "course1"},
    {id: 3, nom: "course1"},
    {id:4, nom: "course1"}
]




router.get("/:id", (req, res)=>{
    const course = courses.find(c =>c.id === parseInt(req.params.id))
    if(!course) res.status(404).send("je ne trouve pas le cour en question")
    res.send(course)
})

router.post("/", (req, res)=>{

    const result = courseSchema.validate(req.body)
    if(result.error) res.status(404).send(result.error.details[0].message)

    const course = {id: courses.length +1,
    nom:req.body.nom
}

    courses.push(course)
    res.send(course)
})

router.put("/:id", (req, res)=>{
   const course =  courses.find(c => c.id === parseInt(req.params.id))
   if (!course) res.status(404).send("le cour que vous cherchez n'existe pas ")
   
   const {error} = courseSchema.validate(req.body)
   if (error) res.status(404).send(error.details)

   course.nom = req.body.nom
   res.send(course)
    
})

router.delete("/:id", (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send("nous ne trouvons pas le cour que vous cherchez")

    const index = courses.indexOf(course)
    
   courses.splice(index)
    res.send(course)

})

module.exports = router
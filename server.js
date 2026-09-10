const express=require("express")
const mongoose=require("mongoose")
const app=express()
const {students,studento,studentById, updateo, updatem, deleteo, deleteById, deletem, studentm, create_students, create_student}=require("./controllers/studentController.js")
app.use(express.json())
const port=5001
mongoose.connect("mongodb://localhost:27017/aidsa_students")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((err)=>{
    console.log(`error is ${err}`)
})


app.post("/create_student",create_student)
app.post("/create_students",create_students)
app.get("/students",students)
app.get("/studentm",studentm)
app.get("/studento",studento)
app.get("/student/:id",studentById)
app.put("/updateo",updateo)
app.put("/updatem",updatem)
app.delete("/deleteo",deleteo) 
app.delete("/delete/:id",deleteById) 
app.delete("/deletem",deletem)

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
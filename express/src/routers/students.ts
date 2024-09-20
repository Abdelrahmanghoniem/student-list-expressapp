import  express  from "express";
import { studentModel } from "../models/student";
const router = express.Router();

router.get("/", async (req,res)=>{
    try{
        const students =await studentModel.find()
        res.status(200).send(students)
    
    }catch{
        res.status(500).send({message:"Error fetching students"})
    }

})

router.get("/:id", async (req,res)=>{
    const id = req.params.id;
    const student =await studentModel.findById(id)

    if(!student){
        res.status(404).send({message: "Student not found"})
    }
    res.send(student);
});

router.post("/", async (req,res)=>{
    try{
        const data =req.body;
        console.log({data})
        const newStudent=await studentModel.create(data)
        newStudent.save
        res.status(201).send(newStudent)
    }catch(err:any){
        res.status(500).send(err.message)

    }
    

})

router.put("/:id", async (req,res)=>{

    const id =req.params.id;
    const data =req.body;
    const student=await studentModel.findByIdAndUpdate(id,data,{new:true})
    if (!student){
       return res.status(404).send("student not found")
    
    }
    res.send(student);
    
})

router.delete("/:id", async (req,res)=>{

    const id =req.params.id;
    const student=await studentModel.findByIdAndDelete(id)
    if (!student){
       return res.status(404).send("student not found")
    
    }
    res.send("deleted");
    
})

export default router;
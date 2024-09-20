import { Paper, TextField,Button } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { Student } from "../utils/data"
import { createStudents } from "../api/students"

interface Props {
    setStudents:Dispatch<SetStateAction<Student[]>>
    students:Student[]
}
const initialState={id:999,fullName:"",age:"", email:"",class:""}

export const AddStudent = ({setStudents,students}:Props) =>{
    const[formData,setFormData]=useState(initialState)



    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit =async()=>{
        try{
            //call the post endpoint
            const data=await createStudents(formData)

            setStudents([...students,data])
            setFormData(initialState)

        }catch(err){
            alert (err)
        }
            
           
        }

        useEffect(()=>{
            console.log("firing useEffect")
            if(formData.fullName==="admin"){
                alert("not an allowed name")
            }
        },[formData.fullName])
    
    return (
        <Paper
            sx={{
                width:520,
                padding:5,
                marginTop:"25px",
                gap:3,
                display:"flex",
                flexDirection:"column"
                }}>

            <TextField
            onChange={handleChange}
            value={formData.fullName}
            id="outlined-basic"
            label="Full Name"
            name="fullName"
            variant="outlined"
            />

            <TextField
            onChange={handleChange}
            value={formData.age}
            id="outlined-basic"
            label="Age"
            name="age"
            variant="outlined"
            />
            <TextField
            onChange={handleChange}
            value={formData.email}
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            />
            <TextField
            onChange={handleChange}
            value={formData.class}
            id="outlined-basic"
            label="Class"
            name="class"
            variant="outlined"
            />
                
                <Button onClick={handleSubmit} variant="contained">
                    submit
                </Button>
        </Paper>
    )
}
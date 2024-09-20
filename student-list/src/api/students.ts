import { Student } from './../utils/data';
const BASE_URL="http://localhost:3000/students";


export const fetchStudents =async()=>{
  try{
    const response=await fetch(BASE_URL)
    if(!response.ok){
        throw new Error(`${response.statusText}:${response.status}`)
    }
    return await response.json();
  }catch(err){
    throw err;
  }  
};




export const createStudents =async(data:Student)=>{
    try{
        const response=await fetch(BASE_URL,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            throw new Error(`${response.statusText}:${response.status}`)
        }
        return await response.json();
        
    }catch(err){
        throw err;
    }
   
    
};
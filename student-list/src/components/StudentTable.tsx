import { Student } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useMemo } from "react";

interface props{
  students : Student[]
}

export const StudentTable=({students}:props)=>{

  useEffect(()=>{
    if(students.length===5){
      alert("max limit reached")
    }
  },[students]);

const studentswithscholarship= useMemo(() => {
  return students.map((s)=>{
  let result =false;
  for(let i=0; i<=100;i++){
    result= Math.random()>0.5

  }
  return{...s,eligible:result}
})} , []) 



    return (
      <TableContainer component={Paper} sx={{width:600}}>
        <Table size="small" sx={{border : 2}}>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>class</TableCell>
            <TableCell>scholarship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((item,index) => {
            return (
            <TableRow>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.class}</TableCell>
            <TableCell>{studentswithscholarship[index]?.eligible? "yes":"no"}</TableCell>
            </TableRow>

            );
          })}
          
        </TableBody>
      </Table>  
      </TableContainer>
    )
}

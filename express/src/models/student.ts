import mongoose,{Schema,Document} from "mongoose";

interface Istudent extends Document{
    fullName:string;
    email:string;
    age:string;
    class:string;
}

const studentSchema:Schema=new Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:String,required:true},
    class:{type:String,required:true}
})


export const studentModel=mongoose.model<Istudent>("students",studentSchema);
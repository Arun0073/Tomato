import mongoose from "mongoose";

export const connectDB= async ()=>{
await mongoose.connect('mongodb+srv://arunodaysingh19:7987062978@cluster0.l4ok184.mongodb.net/fooddel').then(()=>console.log('mongodb connected'))
}
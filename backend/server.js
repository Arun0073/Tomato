import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js'
import foodRouter from './routes/foodRoutes.js'
import userRouter from './routes/userRoute.js'
import env from 'dotenv/config.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
res.send('API Working')
})


app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://arunodaysingh19:7987062978@cluster0.l4ok184.mongodb.net/?
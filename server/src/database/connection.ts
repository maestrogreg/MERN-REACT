import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();


const URI = process.env.MONGO_URI as string;
export const connect = ()=>{
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
.then(data => console.log(`connected to database`))
.catch((err)=>{
    throw new Error(err);
})
}
import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        mongoose.connection.on('connected', ()=> console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URL}/agrilink`)
    }catch(error){
        console.error(error.message);
    }
}

export default connectDB;
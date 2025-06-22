import mongoose from "mongoose";
const MONGODB_URI=process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

let isConnected=false;

export const connectToDB= async()=>{
    if(isConnected){
        console.log("Database is already connected")
    }

    else{
        try{
            await mongoose.connect(MONGODB_URI,{
                dbName:"glensproject"
            });
            isConnected = true;
            console.log("Database connected successfully");
        }
        catch(error){
            console.error("Error connecting to the database:", error);
            throw new Error("Failed to connect to the database");
        }
    }
}
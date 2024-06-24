import mongoose from "mongoose";

const connectDb = async () => { 
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB}`);
        console.log(`Database Connected \nHOST= ${connect.connection.host}\nNAME= ${connect.connection.name}`);
        
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

export default connectDb;
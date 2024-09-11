import mongoose from "mongoose";

// const userName = 'sabhinav';
const password = process.env.mypassword;

type connectObj = {
    isConnected?: number;
}

const connection : connectObj = {};

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const uri = `mongodb+srv://sabhinav:${password}@quiz-app.vqfm7.mongodb.net/?retryWrites=true&w=majority&appName=Quiz-App`;

async function run(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected");
        return;
    }
    try {
      // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      const db = await mongoose.connect(uri,{});
      connection.isConnected = db.connections[0].readyState;
      console.log("You successfully connected to MongoDB!");
    } 
    catch(error){
        console.log("Database connection failed:", error);
        process.exit(1);
    }
}

export default run;
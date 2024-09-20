// import { timeStamp } from 'console';
// import { Schema, model } from 'mongoose';
import mongoose, { Document, Model } from "mongoose";

interface ISession{
  topic: string;
  numberOfQuestions: number;
  type: String;
  score: number;
  date: Date;  // Date is a built-in Mongoose type.
}

interface IUser {
  name: string;
  email: string;
  image?: string;
  history?: ISession[];
}

// 2. Create a Schema corresponding to the document interface.

const quizSession = new mongoose.Schema<ISession>({
  topic: { type: String, required: true },
  numberOfQuestions: { type: Number, required: true },
  type: { type: String, required: true, enum: ['mcq', 'open_ended']},
  score: { type: Number, required: true},
  date: Date,
}, {timestamps:true});


const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: String,
  history: [quizSession]
},{timestamps:true});
// 3. Create a Model.
export const User: Model<IUser> =  mongoose.models?.User || mongoose.model('User', userSchema);
export const Question: Model<ISession> = mongoose.models?.User || mongoose.model('Session', quizSession);
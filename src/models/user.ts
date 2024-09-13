import { timeStamp } from 'console';
import { Schema, model } from 'mongoose';

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
  avatar?: string;
  history?: ISession[];
}

// 2. Create a Schema corresponding to the document interface.

const quizSession = new Schema<ISession>({
  topic: { type: String, required: true },
  numberOfQuestions: { type: Number, required: true },
  type: { type: String, required: true, enum: ['mcq', 'open_ended']},
  score: { type: Number, required: true},
  date: Date,
}, {timestamps:true});


const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  history: [quizSession]
},{timestamps:true});
// 3. Create a Model.
export const User = model<IUser>('User', userSchema);
export const Question = model<ISession>('Session', quizSession);
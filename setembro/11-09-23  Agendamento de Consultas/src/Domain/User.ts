import { Schema, model, Types } from 'mongoose';

interface UserType {
    name: string;
    email: string;
    password: string;
    appointment: Types.ObjectId[];
  }
  
  const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    appointment: [{ type: Schema.Types.ObjectId, ref: "appointments" }]
  },{timestamps: true});
  
  const User = model("usersmed", userSchema);

  
  export { User };

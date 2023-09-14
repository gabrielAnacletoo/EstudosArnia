import { Schema, model, InferSchemaType } from 'mongoose';



const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  appointment: [{ type: Schema.Types.ObjectId, ref: "appointments" }]
},{timestamps: true});


type UserDocument  = InferSchemaType<typeof userSchema>
const User = model("usersmed", userSchema);

export { User, UserDocument };

import { Schema, model } from 'mongoose';

const TarefaSchema = new Schema ({
    title: { type: String, required: true, minLength: 2},
    content: { type: String, required: true, minLength: 2 },
    status: { type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'User', default: null}
}, {timestamps: true});

const Tarefa = model("TarefasKanban", TarefaSchema);


const UserSchema = new Schema({
    name: { type: String, required: true, minLength: 3},
    email: { type: String, required: true, unique: true }
}, {timestamps: true})

const User = model("UsersKanban", UserSchema);

export { Tarefa, User }
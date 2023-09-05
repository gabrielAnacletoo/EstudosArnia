import { Schema, model } from 'mongoose';

const RifaSchema = new Schema ({
    title: {
        type: String,
        required: true,
        minLength: 2
    },
    minValue: {
        type: Number,
        required: true,
        minLength: 2
    },
    maxValue: {
        type: Number,
        required: true,
        minLength: 2
    },
    valueGenerated: {
        type: Number,
        default: null,
        minLength: 2,
    }
    
}, {timestamps: true});

const Rifa = model("Rifa", RifaSchema);
export { Rifa }
import mongoose from 'mongoose'

const ReserveSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  hotel: {type: mongoose.Schema.Types.ObjectId, ref: "Hotel"},
  checkin: {type: Date, min: '2023-09-05'},
  checkout: {type: Date, max: '2023-12-25'},
  status: {type: String, enum: ["ativa", "cancelada", null], default: null }
}, {timestamps: true})

const Reserve = mongoose.model("reserve", ReserveSchema)
export {Reserve}
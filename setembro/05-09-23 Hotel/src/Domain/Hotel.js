import mongoose from 'mongoose'

const HotelSchema = new mongoose.Schema({
  name: { type: String },
  address: {type: String},
  roomsavailable: {type: Number}
}, {timestamps: true})

const Hotel = mongoose.model("Hotels", HotelSchema);
export {Hotel}
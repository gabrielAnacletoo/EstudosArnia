import mongoose from 'mongoose'

const RentSchema = new mongoose.Schema({
  userscars: {type: mongoose.Schema.Types.ObjectId, ref: "userscars"},
  dealership: {type: mongoose.Schema.Types.ObjectId, ref: "dealerships"},
  withdrawalDate: {type: Date, min: '2023-09-05'},
  returnDate: {type: Date, max: '2023-12-25'},
  status: {type: String, enum: ["Alugado", "Cancelado", null], default: null }
}, {timestamps: true})
  
const Rent = mongoose.model("rents", RentSchema)
export {Rent}
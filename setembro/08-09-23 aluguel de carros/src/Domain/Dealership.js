import mongoose from 'mongoose'

const DealerShipSchema = new mongoose.Schema({
  name: { type: String },
  address: {type: String},
  carsAvailable: {type: Number}
}, {timestamps: true})

const DealerShip = mongoose.model("dealerships", DealerShipSchema);
export {DealerShip}
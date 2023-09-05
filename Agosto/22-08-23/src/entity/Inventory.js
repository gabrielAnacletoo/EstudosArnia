import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  code: { type: String, required: true }, 
  amount: { type: String, required: true },
  createdAt: { type: Date, default: Date.now } 
});

const Inventory = mongoose.model('Inventory', InventorySchema);

export {Inventory};

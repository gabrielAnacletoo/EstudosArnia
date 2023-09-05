import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  fileName: String,
});

const FileModel = mongoose.model('File', fileSchema);

export {FileModel};

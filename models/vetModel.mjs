import mongoose from 'mongoose';

const VeterinarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    livestockType: { type: String, required: true },
    expectedDate: { type: Date, required: true },
    address: { type: String, required: true }
});

const Veterinary = mongoose.model('Veterinary', VeterinarySchema);

export default Veterinary;
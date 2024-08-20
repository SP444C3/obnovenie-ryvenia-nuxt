import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    token: String
});

export default mongoose.model('Obnovenie', userSchema);
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    token: String,
    responded: Boolean,
    options: { plan: String, period: String, remember: Boolean }
});

export default mongoose.model('ObnovenieRecord', userSchema);
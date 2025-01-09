import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: [validator.isEmail, 'Please Provide a valid Email'] 
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password should be 8 characters long'],
        select: false
    },
}, {timestamps: true})

const User = new mongoose.model('user', userSchema);
export default User;
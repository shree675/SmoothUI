const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        minlength: 1,
        required: true,
        unique: false
    },
    phone: {
        type: String,
        required: true,
        unique: false,        
    },
    description: {
        type: String,
        unique: false,
        required: true
    }
},
{
    timestamps: true,
});

const User=mongoose.model('User',UserSchema);

module.exports=User;
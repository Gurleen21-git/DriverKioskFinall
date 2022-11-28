const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    repeatpassword: { type: String, require: true },
    userType: { type: String, require: true },
});

UserSchema.pre("save", function(next){
    const user = this;

    bcrypt.hash(user.password, 10, (error, hash)=>{
        user.password = hash;
        next();
    });
})

const User = mongoose.model('User',UserSchema);

module.exports = User

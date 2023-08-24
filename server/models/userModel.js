const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        enum: ["regular", "admin", "guest"],
        default: "regular",
    }
},
 {timestamps: true}
);

const User = mongoose.model("User", UserSchema)
module.exports = User;
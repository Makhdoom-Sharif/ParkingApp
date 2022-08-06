const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema(
    {
        placeName: { type: String, required: true },
        totalSlots: { type: Number, required: true },
    }, { timestamps: true }
)


module.exports = mongoose.model('Places', UserSchema)
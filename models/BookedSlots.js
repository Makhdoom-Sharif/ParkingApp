const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema(
    {
        parkingPlaceID: { type: String, required: true },
        userID: { type: String, required: true },
        from: { type: Date, default: Date.now },
        to: { type: Date, default: Date.now }
    }, { timestamps: true }
)


module.exports = mongoose.model('BookedSlots', UserSchema)
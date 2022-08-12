const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    parkingPlaceID: { type: String, required: true },
    userID: { type: String, required: true },
    from: { type: Number, default: Date.now },
    to: { type: Number, default: Date.now },
    slotNo: { type: String, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookedSlots", UserSchema);

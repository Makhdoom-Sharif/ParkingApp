const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema(
  {
    parkingPlaceID: { type: String, required: true },
    slotNo: { type: String, unique: true, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slot", SlotSchema);

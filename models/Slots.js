const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema(
  {
    parkingPlaceID: { type: String, required: true },
    slotNo: { type: String, require: true },
    slotID: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slot", SlotSchema);

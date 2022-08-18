const mongoose = require("mongoose");

const PlacesSchema = new mongoose.Schema(
  {
    placeName: { type: String, required: true },
    totalSlots: { type: Number, default: 0 },
    AreaID: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Places", PlacesSchema);

const mongoose = require("mongoose");

const PlacesSchema = new mongoose.Schema(
  {
    placeName: { type: String, required: true, unique: true },
    totalSlots: { type: Number, required: true },
    AreaID: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Places", PlacesSchema);

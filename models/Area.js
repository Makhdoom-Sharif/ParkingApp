const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema(
  {
    AreaName: { type: String, require: true, unique: true },
    TotalPalces: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Area", AreaSchema);

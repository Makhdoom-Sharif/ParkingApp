const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema(
  {
    AreaName: { type: String, require: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Area", AreaSchema);

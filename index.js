const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const bookingRoute = require("./routes/booking");
const PlacesRoute = require("./routes/Place");
const AreaRoute = require("./routes/area");
const SlotsRoute = require("./routes/slots");

var cors = require("cors");
dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.use("/api/newbooking", bookingRoute);
app.use("/api/places", PlacesRoute);
app.use("/api/area", AreaRoute);
app.use("/api/slot", SlotsRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is runing");
});

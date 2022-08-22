const Booking = require("../models/BookedSlots");
const Slots = require("../models/Slots");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

//Checking Booking Availability
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { parkingPlaceID, from, to, Tslots } = req.query;
    TotalSlots = Number(Tslots);
    start = Number(from);
    end = Number(to);
    const alreadyBooked = Booking.find({
      parkingPlaceID: {
        $in: parkingPlaceID,
      },
      $or: [
        {
          from: {
            $lte: start,
          },
        },
        {
          from: {
            $lte: end,
          },
        },
      ],
      to: {
        $gte: end,
      },
    });
    const booked = await alreadyBooked;
    if (booked.length === TotalSlots) {
      return res.status(201).json([]);
    } else {
      const AllSlots = await Slots.find({
        parkingPlaceID: {
          $in: parkingPlaceID,
        },
      });
      const AvailableSlots = AllSlots.filter(
        ({ _id: id1 }) =>
          !booked.some(({ slotID: id2 }) => id2 === id1.toString())
      );
      return res.status(201).json(AvailableSlots);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Post New Booking
router.post("/new", verifyTokenAndAuthorization, async (req, res) => {
  const newBooking = new Booking({
    parkingPlaceID: req.body.parkingPlaceID,
    userID: req.body.userID,
    from: req.body.from,
    to: req.body.to,
    slotNo: req.body.slotNo,
    slotID: req.body.slotID,
  });
  try {
    const postNewBooking = await newBooking.save();
    res.status(201).json(postNewBooking);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Delete Booking
router.delete("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const booking = await Booking.findById(req.body.BookingID);
    const { userID } = booking;
    if (userID === req.body.userID) {
      await Booking.findByIdAndDelete(req.body.BookingID);
      res.status(200).json("Booking has been cancelled");
    } else {
      res.status(201).json("You're not authenticated");
    }
  } catch (err) {
    res.status(500).json("No Booking Found");
  }
});

//Get User Booking
router.get("/find", verifyTokenAndAuthorization, async (req, res) => {
  // const qCategory = req.query.category;
  // console.log(qCategory);
  try {
    let response;
    const { qCategory, userID } = req.query;
    console.log(req.query);
    if (qCategory === "history") {
      response = await Booking.find({
        userID: {
          $in: userID,
        },
        to: {
          $lt: new Date().getTime(),
        },
      });
    } else if (qCategory === "pending") {
      response = await Booking.find({
        userID: {
          $in: userID,
        },
        to: {
          $gte: new Date().getTime(),
        },
      });
    } else {
      response = await Booking.find({
        userID: {
          $in: userID,
        },
      });
    }
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get allBooking
router.get("/findAll", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allBooking = await Booking.find();
    res.status(200).json(allBooking);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

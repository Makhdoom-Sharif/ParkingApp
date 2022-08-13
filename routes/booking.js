const Booking = require("../models/BookedSlots");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

//Checking Booking
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  const alreadyBooked = Booking.find({
    parkingPlaceID: {
      $in: req.body.parkingPlaceID,
    },
    $or: [
      {
        from: {
          $lte: req.body.from,
        },
      },
      {
        from: {
          $lte: req.body.to,
        },
      },
    ],
    to: {
      $gte: req.body.to,
    },
  });

  try {
    const booked = await alreadyBooked;
    if (booked.length === req.body.slots) {
      res.status(201).json("No Slots Available");
    } else {
      const bookedSlotsNoArray = booked.map((item) => {
        return item.slotNo;
      });

      const x = req.body.slots;
      let slotsArray = [];
      for (let i = 0; i < x; i++) {
        slotsArray.push(`${i + 1}`);
      }

      var availableSlotsNo = slotsArray.filter(
        (x) => !bookedSlotsNoArray.includes(x)
      );
      const availableSlotsAmount = req.body.slots - booked.length;
      res.status(201).json({
        AvialbleSlots: availableSlotsNo,
        res: `${availableSlotsAmount} slots Available`,
      });
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
  try {
    const AllBookingUser = await Booking.find({
      userID: {
        $in: req.body.userID,
      },
    });
    if (AllBookingUser.length > 0) {
      res.status(200).json(AllBookingUser);
    } else {
      res.status(200).json("No Booking Available");
    }
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

const Booking = require("../models/BookedSlots");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

//Checking Booking
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { parkingPlaceID, from, to, slots } = req.query;
    TotalSlots = Number(slots);
    start = Number(from);
    end = Number(to);
    // console.log(TotalSlots);
    // console.log(start);
    // console.log(end);
    // console.log(parkingPlaceID);
    console.log(req.query);
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
    // console.log(await alreadyBooked);
    const booked = await alreadyBooked;
    console.log("=>", booked);
    // res.status(200).json(booked);
    if (booked.length === TotalSlots) {
      res.status(201).json("No Slots Available");
    } else {
      const bookedSlotsNoArray =
        booked.length === 0
          ? []
          : booked.map((item) => {
              return item.slotNo;
            });

      const x = TotalSlots;
      let slotsArray = [];
      for (let i = 0; i < x; i++) {
        slotsArray.push(`${i + 1}`);
      }

      var availableSlotsNo = slotsArray.filter(
        (x) => !bookedSlotsNoArray.includes(x)
      );
      const availableSlotsAmount = TotalSlots - booked.length;
      res.status(201).json({
        AvialbleSlots: availableSlotsNo,
        message: `${availableSlotsAmount} slots Available`,
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
  const qCategory = req.query.category;
  // console.log(qCategory);
  try {
    let response;
    console.log(req.query);

    if (req.query.category === "history") {
      response = await Booking.find({
        userID: {
          $in: req.body.userID,
        },
        to: {
          $lt: new Date().getTime(),
        },
      });
      console.log("if==>", response);
    } else if (qCategory === "pending") {
      response = await Booking.find({
        userID: {
          $in: req.body.userID,
        },
        to: {
          $gte: new Date().getTime(),
        },
      });
      console.log("elseif==>", response);
    } else {
      response = await Booking.find({
        userID: {
          $in: req.body.userID,
        },
      });
      // console.log("else==>", response);
    }
    // res.status(200).json(response);
    return response.length > 0
      ? res.status(200).json(response)
      : res.status(200).json("No Booking Available");
    // if (response.length > 0) {
    //   res.status(200).json(AllBookingUser);
    // } else {
    //   res.status(200).json("No Booking Available");
    // }
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

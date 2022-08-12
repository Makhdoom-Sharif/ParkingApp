// const { find } = require("../models/BookedSlots");
const Booking = require("../models/BookedSlots");
// const { find } = require('../models/Places');
// const { find } = require('../models/Places');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

//Write Booking
router.post("/new", verifyTokenAndAuthorization, async (req, res) => {
  const alreadyBooked = Booking.find(
    {
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
    }
    // from === req.body.from
  );

  // const newBooking = new Booking({
  //     parkingPlaceID: req.body.parkingPlaceID,
  //     userID: req.body.userID,
  //     from: req.body.from,
  //     to: req.body.to
  // })
  try {
    const booked = await alreadyBooked;
    if (booked.length === req.body.slots) {
      // const newBookingSaved = await newBooking.save()
      // res.status(201).json(newBookingSaved)

      res.status(201).json("No Slots Available");
    } else {
      const bookedSlotsNoArray = booked.map((item) => {
        return item.slotNo;
      });

      console.log(bookedSlotsNoArray);

      // const x = req.body.slots;
      // let slotsArray;
      // // for (let i = 0; i < x; i++) {
      // //   [...[`${i + 1}`]];
      // // }

      // console.log("====>", slotsArray);
      const availableSlotsAmount = req.body.slots - booked.length;
      res.status(201).json(`${availableSlotsAmount} slots Available`);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// `//Delete
// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//     try {
//         await Users.findByIdAndDelete(req.params.id)
//         res.status(200).json("User has been deleted..!")
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// //Get User
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//     try {
//         const user = await Users.findById(req.params.id)
//         const { password, ...others } = user._doc;
//         res.status(200).json({ others });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// //Get All User
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//     try {
//         const users = await Users.find()

//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

module.exports = router;

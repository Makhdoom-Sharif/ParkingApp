const Area = require("../models/Area");
const BookedSlots = require("../models/BookedSlots");
const Places = require("../models/Places");
const Slots = require("../models/Slots");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

// CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newPlace = new Places(req.body);
  try {
    const UpdatedArea = await Area.findByIdAndUpdate(req.body.AreaID, {
      $inc: { TotalPalces: 1 },
    });
    // console.log(UpdatedArea);
    const savedPlace = await newPlace.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update

router.put("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedPlace = await Places.findByIdAndUpdate(
      req.body.parkingPlaceID,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPlace);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const UpdatedArea = await Area.findByIdAndUpdate(req.body.AreaID, {
      $inc: { TotalPalces: -1 },
    });
    const BookingToBeDeleted = await BookedSlots.find({
      parkingPlaceID: {
        $in: req.body.parkingPlaceID,
      },
    });

    const SlotsToBeDeleted = await Slots.find({
      parkingPlaceID: {
        $in: req.body.parkingPlaceID,
      },
    });

    const d = new Date().getTime();
    const BooleanArray = BookingToBeDeleted.map((item) => {
      return item.from >= d || item.to >= d ? true : false;
    });

    const state = BooleanArray.find((item) => {
      return item === true;
    });
    let response;
    if (state) {
      response = "Unable to delete";
      // return res.status(200).json("Unable to delete");
    } else {
      BookingToBeDeleted.forEach(async (item) => {
        await BookedSlots.findByIdAndDelete(item._id.toString());
      });
      SlotsToBeDeleted.forEach(async (item) => {
        await Slots.findByIdAndDelete(item._id.toString());
      });
      await Places.findByIdAndDelete(req.body.parkingPlaceID);
      response = "Deleted successfully";
    }
    return res.status(200).json(response);
    // console.log(SlotsToBeDeleted);
    // console.log(BookingToBeDeleted);
    // console.log(BooleanArray);
    // console.log(state);
    // res.status(200).json("Place deleted successfully.....");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PlaceS
// router.get("/find/:id", async (req, res) => {
//   try {
//     const Place = await Place.findById(req.params.placeID);
//     res.status(200).json(Place);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//Get all PlaceS

router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  const qAreaID = req.query.AreaID;
  // const qCategory = req.query.category;
  try {
    // let GetPlaces;
    // if (qNew) {
    //   GetPlaces = await Places.find().sort({ createdAt: -1 }).limit(1);
    // } else if (qCategory) {
    //   GetPlaces = await Places.find({
    //     categories: {
    //       $in: [qCategory],
    //     },
    //   });
    // } else {
    console.log(qAreaID);
    const GetPlaces = await Places.find({
      AreaID: {
        $in: qAreaID,
      },
    });
    // }
    res.status(200).json(GetPlaces);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

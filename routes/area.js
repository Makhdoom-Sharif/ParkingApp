const Area = require("../models/Area");
const BookedSlots = require("../models/BookedSlots");
const Places = require("../models/Places");
const Slots = require("../models/Slots");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

// Post New Area
router.post("/new", verifyTokenAndAdmin, async (req, res) => {
  const newArea = new Area({
    AreaName: req.body.AreaName,
    TotalPalces: req.body.TotalPalces,
  });
  try {
    const postNewArea = await newArea.save();
    res.status(201).json(postNewArea);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Delete Area
router.delete("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const PlacesToBeDeleted = await Places.find({
      AreaID: {
        $in: req.body.AreaID,
      },
    });

    const SlotsToBeDeletedArray = await Promise.all(
      PlacesToBeDeleted.map(async (item) => {
        return await Slots.find({
          parkingPlaceID: {
            $in: item._id.toString(),
          },
        });
      })
    );
    const SlotsToBeDeletedArrayflat = SlotsToBeDeletedArray.flat();

    const BookingToBeDeletedArray = await Promise.all(
      PlacesToBeDeleted.map(async (item) => {
        return await BookedSlots.find({
          parkingPlaceID: {
            $in: item._id.toString(),
          },
        });
      })
    );
    const flatBookingToBeDeleted = BookingToBeDeletedArray.flat();

    const d = new Date().getTime();
    const BooleanArray = flatBookingToBeDeleted.map((item) => {
      return item.from >= d || item.to >= d ? true : false;
    });
    // console.log(flatBookingToBeDeleted);
    // console.log(d);
    const state = BooleanArray.find((item) => {
      return item === true;
    });
    console.log(state);
    let response;
    if (state) {
      // console.log("first");
      response = "Unable to delete";
      // return res.status(200).json("Unable to delete");
    } else {
      flatBookingToBeDeleted.forEach(async (item) => {
        await BookedSlots.findByIdAndDelete(item._id.toString());
      });
      SlotsToBeDeletedArrayflat.forEach(async (item) => {
        await Slots.findByIdAndDelete(item._id.toString());
      });
      PlacesToBeDeleted.forEach(async (item) => {
        await Places.findByIdAndDelete(item._id.toString());
      });
      await Area.findByIdAndDelete(req.body.AreaID);
      // console.log("second");
      response = "deleted";
    }
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json("No Area Found");
  }
});

// Update Area
router.put("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedArea = await Area.findByIdAndUpdate(
      req.body.AreaID,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedArea);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get allAreas
router.get("/findAll", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const allAreas = await Area.find();
    res.status(200).json(allAreas);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

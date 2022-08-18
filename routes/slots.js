const BookedSlots = require("../models/BookedSlots");
const Slots = require("../models/Slots");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newSlot = new Slots(req.body);
  try {
    const savedPlace = await newSlot.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update

router.put("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedSlot = await Slots.findByIdAndUpdate(
      req.body.SlotID,
      {
        $set: { slotNo: req.body.slotNo },
      },
      { new: true }
    );
    res.status(200).json(updatedSlot);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const BookingToBeDeleted = await BookedSlots.find({
      parkingPlaceID: {
        $in: req.body.parkingPlaceID,
      },
      _id: {
        $in: req.body.slotID,
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
    } else {
      BookingToBeDeleted.forEach(async (item) => {
        await BookedSlots.findByIdAndDelete(item._id.toString());
      });

      await Slots.findByIdAndDelete(req.body.SlotID);
      response = "Deleted successfully";
    }
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all slots

router.get("/findAll", verifyTokenAndAdmin, async (req, res) => {
  try {
    GetAllSlots = await Slots.find();
    res.status(200).json(GetAllSlots);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

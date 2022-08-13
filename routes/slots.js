const Slots = require("../models/Slots");
// const Places = require("../models/Slots");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
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
        $set: req.body,
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
    await Slots.findByIdAndDelete(req.body.SlotID);
    res.status(200).json("Place deleted successfully.....");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all PlaceS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let GetPlaces;
    if (qNew) {
      GetPlaces = await Places.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      GetPlaces = await Places.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      GetSlots = await Slots.find();
    }
    res.status(200).json(GetSlots);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

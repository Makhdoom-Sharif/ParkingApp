const Area = require("../models/Area");
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

    try {
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
      console.log("outside==>", SlotsToBeDeletedArrayflat);
      PlacesToBeDeleted.forEach(async (item) => {
        await Places.findByIdAndDelete(item._id.toString());
      });

      SlotsToBeDeletedArrayflat.forEach(async (item) => {
        await Slots.findByIdAndDelete(item._id.toString());
      });
      await Area.findByIdAndDelete(req.body.AreaID);
      res.status(200).json("Area has been deleted");
    } catch (e) {
      res.status(200).json("No Areas Found");
    }
    // await Area.findByIdAndDelete(req.body.AreaID);
    // res.status(201).json(PlacesToBeDeleted);
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

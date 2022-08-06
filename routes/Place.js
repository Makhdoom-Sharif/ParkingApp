const Users = require('../models/Places');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const router = require('express').Router()



// CREATE


router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newPalce = new Place(req.body)
    try {
        const savedPlace = await newPlace.save();
        res.status(200).json(savedPlace)
    } catch (err) {
        res.status(500).json(err)
    }
})
//Update

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedPlace = await Place.findByIdAndUpdate(req.params.placeID, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedPlace)
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Place.findByIdAndDelete(req.params.placeID);
        res.status(200).json("Place deleted successfully.....")
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET PlaceS
router.get("/find/:id", async (req, res) => {
    try {
        const Place = await Place.findById(req.params.placeID);
        res.status(200).json(Place);
    } catch (err) {
        res.status(500).json(err)
    }
});


//Get all PlaceS

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let Places;
        if (qNew) {
            Places = await Place.find().sort({ createdAt: -1 }).limit(1)
        } else if (qCategory) {
            Places = await Place.find({
                categories: {
                    $in: [qCategory]
                }
            })
        } else {
            Places = await Place.find();
        }
        res.status(200).json(Places);
    } catch (err) {
        res.status(500).json(err)
    }
});







module.exports = router
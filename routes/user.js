const Users = require('../models/Users');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const router = require('express').Router()


router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_KEY).toString();

    }

    try {
        const updateUser = await Users.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
})


//Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted..!")
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get User
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        const { password, ...others } = user._doc;
        res.status(200).json({ others });
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get All User
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const users = await Users.find()

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router
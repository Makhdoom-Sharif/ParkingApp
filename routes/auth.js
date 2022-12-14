const router = require('express').Router();
const User = require('../models/Users')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
//REGISTER

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        contactNo: req.body.contactNo,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_KEY).toString()


    })
    try {
        const savedUser = await newUser.save()

        // const accessToken = jwt.sign(
        //     {
        //         id: user._id,
        //         isAdmin: user.isAdmin,
        //     },
        //     process.env.JWT_PASS,
        //     { expiresIn: '3d' }
        // )



        return res.status(201).json(savedUser)
    } catch (error) {
        return res.status(500).json(error)
    }
})

//LOGIN

router.post("/login", async (req, res) => {


    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) { res.status(401).json("Wrong Credentials!") }
        else {

            const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_KEY);
            originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            if (originalPassword !== req.body.password) {
                res.status(401).json("Wrong Credentials!");
            } else {
                const accessToken = jwt.sign(
                    {
                        id: user._id,
                        isAdmin: user.isAdmin,
                    },
                    process.env.JWT_PASS,
                    { expiresIn: '3d' }
                )
                const { password, ...others } = user._doc;
                return res.status(200).json({ ...others, accessToken });
            }
        }
    } catch (err) {
        return res.status(500).json(err)
    }

});

module.exports = router;
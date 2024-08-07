const express = require('express');
const userRouter = express.Router();
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require("../config");

const signupBody = zod.object({
    username: zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email Already Taken/ Incorrect Inputs"
        })
    }
    const existingUser = User.findOne({
        username: req.body.username;
    })
    if(existingUser){
        return res.status(411).json({
            message: "Email Already Taken/ Incorrect Inputs"
        })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userid = user._id;

    const token = jwt.sign({
        userId,
    }, JWT_SECRET);

    res.json({
        message: "User Created Successfully",
        token: token
    })
})

module.exports = userRouter;
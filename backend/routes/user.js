const express = require('express');
const userRouter = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const { authMiddleware } = require('../middlewares/middleware');
const mongoose = require('mongoose');

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
})

userRouter.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email Already Taken/ Incorrect Inputs",
            error: res.body
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: "Email Already Taken/ Incorrect Inputs",
        })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;
    
    //Creates new account.
    await Account.create({
        userId: userId,
        balance: 1 + Math.random() * 10000,
    })

    const token = jwt.sign({
        userId,
    }, JWT_SECRET);

    res.json({
        message: "User Created Successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})

userRouter.post("/signin", async (req, res) => {
    try {
        const { success } = signinBody.safeParse(req.body);
        if (!success) {
            return res.status(400).json({
                message: "Invalid input format"
            });
        }

        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            token,
            message: "Sign in successful"
        });

    } catch (error) {
        console.error('Sign in error:', error);
        res.status(500).json({
            message: "An error occurred during sign in"
        });
    }
});

const updateBody = zod.object({
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
    password: zod.string().optional()
})

userRouter.put("/", authMiddleware, async (req, res)=> {
    const { success } = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    if(req.body.password){
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
    }
    await User.updateOne({ _id:req.userid }, req.body);

    res.json({
        message: "Updated Successfully"
    })
})

userRouter.get('/bulk', authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    const objectIdFilter = mongoose.Types.ObjectId.isValid(filter) ? { _id: filter } : null;
    const users = await User.find({
        $or:[
            {
                firstName:{
                    "$regex":filter
                }
            },
            {
                lastName:{
                    "$regex":filter
                }
            },
            objectIdFilter
        ].filter(Boolean)
    })

    res.json({
        user: users
        .filter(user => user._id.toString() !== req.userid)
        .map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

userRouter.get("/", authMiddleware, async (req, res)=> {
    const currentUser = await User.findById(req.userid);
    res.json({
            username: currentUser.username,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            _id: currentUser._id
        })
})

module.exports = userRouter;
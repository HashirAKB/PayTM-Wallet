// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middlewares/middleware');
const { Account } = require('../db');
const router = express.Router();

router.get("/balance", authMiddleware, async(req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    });
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    try{
        const { amount, to } =req.body;

        // Validate input
        if (!amount || amount <= 0 || !to) {
            throw new Error('Invalid transfer details');
        }

        //Fetch the account within the txn.
        const account = Account.findOne({
            userId: req.userId
        }).session(session);
    
        if(!account || !account.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient Balance"
            });
        }
    
        const toAccount = Account.findOne({
            userId: to
        }).session(session);
    
        if(!toAccount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid Account."
            });
        }
    
        //Perform txn
        await Account.updateOne({
            userId: req.userId
        },
        {
            $inc: {
                balance: -amount
            }
        }
        ).session(session);
    
        await Account.updateOne({
            userId: to
        },
        {
            $inc: {
                balance: amount
            }
        }
        ).session(session);
    
        await session.commitTransaction();
        res.json({
            message: "transfer successfull."
        })
    }
    catch(error){
        await session.abortTransaction();
        res.status(400).json({
            message: error.message || "Transfer failed"
        });
    }
    finally{
        session.endSession();
    }


})
module.exports = router;
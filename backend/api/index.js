// backend/api/index.js
const express = require('express');
import { userRouter } from '../routes/user';
const router = express.Router();

app.use("/api/v1", rootRouter);
module.exports = router;
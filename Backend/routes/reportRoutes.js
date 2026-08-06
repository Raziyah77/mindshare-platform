const express = require("express");

const router = express.Router();

const {
    reportSession
} = require("../controllers/reportController");


router.post(

    "/:sessionId",

    reportSession

);


module.exports = router;
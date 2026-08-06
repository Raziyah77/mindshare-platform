const express = require("express");

const router = express.Router();

const {

    createRequest,
    getWaitingRequests,
    acceptRequest,
    getSessionStatus,
    getSessionStatusById,
    getAcceptedRequests,
    endSession,
    getUserChatHistory,
    getVolunteerChatHistory

} = require("../controllers/sessionController");


router.post(

    "/create",

    createRequest

);


router.get(

    "/waiting",

    getWaitingRequests

);


router.put(

    "/accept/:id",

    acceptRequest

);


router.get(

    "/status/:username",

    getSessionStatus

);


router.get(

    "/status/id/:id",

    getSessionStatusById

);


router.get(

    "/accepted",

    getAcceptedRequests

);


router.put(

    "/end/:id",

    endSession

);


router.get(

    "/history/user/:userId",

    getUserChatHistory

);


router.get(

    "/history/volunteer/:volunteerId",

    getVolunteerChatHistory

);


module.exports = router;
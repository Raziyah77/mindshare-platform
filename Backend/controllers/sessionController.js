const SessionRequest = require("../models/SessionRequest");

const createRequest = async (req, res) => {

    try {

        const {
            username,
            userId
        } = req.body;

        const request = new SessionRequest({
            username,
            userId
        });

        await request.save();

        return res.status(201).json({
            message: "Session request submitted successfully."
        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Something went wrong."
        });

    }

};


const getWaitingRequests = async (req, res) => {

    try {

        const requests = await SessionRequest.find({
            status: "waiting"
        });

        return res.status(200).json(requests);

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Something went wrong."
        });

    }

};


const acceptRequest = async (req, res) => {

    try {

        const { id } = req.params;

        const { volunteerId } = req.body;


        if (!volunteerId) {

            return res.status(400).json({

                message: "Volunteer ID is required."

            });

        }


        const request = await SessionRequest.findById(id);


        if (!request) {

            return res.status(404).json({

                message: "Request not found."

            });

        }


        if (request.status !== "waiting") {

            return res.status(400).json({

                message: "This request is no longer available."

            });

        }


        request.status = "accepted";

        request.acceptedBy = volunteerId;


        await request.save();


        return res.status(200).json({

            message: "Request accepted successfully."

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};


const getSessionStatus = async (req, res) => {

    try {

        const { username } = req.params;


        const request = await SessionRequest.findOne({

            username

        }).sort({

            createdAt: -1

        });


        if (!request) {

            return res.status(404).json({

                message: "No session request found."

            });

        }


        return res.status(200).json({

    _id: request._id,
    status: request.status

});

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};

const getSessionStatusById = async (req, res) => {

    try {

        const { id } = req.params;


        const request = await SessionRequest.findById(id);


        if (!request) {

            return res.status(404).json({

                message: "Session not found."

            });

        }


        return res.status(200).json({

            _id: request._id,
            status: request.status

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};

const getAcceptedRequests = async (req, res) => {

    try {

        const { volunteerId } = req.query;


        if (!volunteerId) {

            return res.status(400).json({

                message: "Volunteer ID is required."

            });

        }


        const requests = await SessionRequest.find({

            status: "accepted",

            acceptedBy: volunteerId

        });


        return res.status(200).json(requests);

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};

const endSession = async (req, res) => {

    try {

        const { id } = req.params;


        const request = await SessionRequest.findById(id);


        if (!request) {

            return res.status(404).json({

                message: "Session not found."

            });

        }


        request.status = "completed";


        await request.save();


        return res.status(200).json({

            message: "Session ended successfully."

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};

const getUserChatHistory = async (req, res) => {

    try {

        const { userId } = req.params;


        if (!userId) {

            return res.status(400).json({

                message: "User ID is required."

            });

        }


        const sessions = await SessionRequest.find({

            userId

        }).sort({

            createdAt: -1

        });


        return res.status(200).json(sessions);

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};


const getVolunteerChatHistory = async (req, res) => {

    try {

        const { volunteerId } = req.params;


        if (!volunteerId) {

            return res.status(400).json({

                message: "Volunteer ID is required."

            });

        }


        const sessions = await SessionRequest.find({

            acceptedBy: volunteerId

        }).sort({

            createdAt: -1

        });


        return res.status(200).json(sessions);

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};

module.exports = {

    createRequest,
    getWaitingRequests,
    acceptRequest,
    getSessionStatus,
    getSessionStatusById,
    getAcceptedRequests,
    endSession,
    getUserChatHistory,
    getVolunteerChatHistory

};
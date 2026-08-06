const Message = require("../models/Message");
const SessionRequest = require("../models/SessionRequest");


const sendMessage = async (req, res) => {

    try {

        const {
            sessionId,
            senderId,
            senderRole,
            text
        } = req.body;


        if (
            !sessionId ||
            !senderId ||
            !senderRole ||
            !text
        ) {

            return res.status(400).json({

                message: "Session, sender information, and message are required."

            });

        }


        if (
            senderRole !== "user" &&
            senderRole !== "volunteer"
        ) {

            return res.status(400).json({

                message: "Invalid sender role."

            });

        }


        const session = await SessionRequest.findById(sessionId);


        if (!session) {

            return res.status(404).json({

                message: "Session not found."

            });

        }


        if (session.status !== "accepted") {

            return res.status(403).json({

                message: "This session is no longer active."

            });

        }


        let isParticipant = false;


        if (senderRole === "user") {

            isParticipant =

                session.userId === senderId;

        }


        else if (senderRole === "volunteer") {

            isParticipant =

                session.acceptedBy?.toString() === senderId;

        }


        if (!isParticipant) {

            return res.status(403).json({

                message: "You are not authorized to send messages in this session."

            });

        }


        const message = new Message({

            sessionId,

            sender: senderRole,

            text: text.trim()

        });


        await message.save();


        return res.status(201).json({

            message: "Message sent successfully."

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};



const getMessages = async (req, res) => {

    try {

        const { sessionId } = req.params;

        const {
            viewerId,
            viewerRole
        } = req.query;


        if (!viewerId || !viewerRole) {

            return res.status(400).json({

                message: "Viewer information is required."

            });

        }


        const session = await SessionRequest.findById(sessionId);


        if (!session) {

            return res.status(404).json({

                message: "Session not found."

            });

        }


        let isParticipant = false;


        if (viewerRole === "user") {

            isParticipant =

                session.userId === viewerId;

        }


        else if (viewerRole === "volunteer") {

            isParticipant =

                session.acceptedBy?.toString() === viewerId;

        }


        if (!isParticipant) {

            return res.status(403).json({

                message: "You are not authorized to view this conversation."

            });

        }


        const messages = await Message.find({

            sessionId

        }).sort({

            createdAt: 1

        });


        return res.status(200).json(messages);

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};


module.exports = {

    sendMessage,

    getMessages

};
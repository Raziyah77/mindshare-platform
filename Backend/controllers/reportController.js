const Report = require("../models/Report");
const SessionRequest = require("../models/SessionRequest");


const reportSession = async (req, res) => {

    try {

        const { sessionId } = req.params;

        const {
            reporterId,
            reporterRole,
            description
        } = req.body;


        if (
            !reporterId ||
            !reporterRole ||
            !description ||
            description.trim() === ""
        ) {

            return res.status(400).json({

                message: "All report information is required."

            });

        }


        const session = await SessionRequest.findById(sessionId);


        if (!session) {

            return res.status(404).json({

                message: "Session not found."

            });

        }


        if (session.status === "completed") {

            return res.status(400).json({

                message: "This session has already ended."

            });

        }


        if (session.status === "reported") {

            return res.status(400).json({

                message: "This session has already been reported."

            });

        }


        const report = new Report({

            sessionId,

            reporterId,

            reporterRole,

            description: description.trim()

        });


        await report.save();


        session.status = "reported";


        await session.save();


        return res.status(201).json({

            message: "Session reported successfully."

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};


module.exports = {

    reportSession

};
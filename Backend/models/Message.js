const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(

    {

        sessionId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "SessionRequest",

            required: true

        },

        sender: {

            type: String,

            required: true

        },

        text: {

            type: String,

            required: true

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model(

    "Message",

    messageSchema

);
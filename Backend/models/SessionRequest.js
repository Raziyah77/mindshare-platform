const mongoose = require("mongoose");


const sessionRequestSchema = new mongoose.Schema(

    {

        username: {

            type: String,
            required: true

        },


        userId: {

            type: String,
            required: true

        },


        status: {

            type: String,
            default: "waiting"

        },


        acceptedBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            default: null

        }

    },

    {

        timestamps: true

    }

);


module.exports = mongoose.model(

    "SessionRequest",

    sessionRequestSchema

);
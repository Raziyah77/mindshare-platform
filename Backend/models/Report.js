const mongoose = require("mongoose");


const reportSchema = new mongoose.Schema(

    {

        sessionId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "SessionRequest",

            required: true

        },


        reporterId: {

            type: String,

            required: true

        },


        reporterRole: {

            type: String,

            required: true

        },


        description: {

            type: String,

            required: true

        }

    },

    {

        timestamps: true

    }

);


module.exports = mongoose.model(

    "Report",

    reportSchema

);
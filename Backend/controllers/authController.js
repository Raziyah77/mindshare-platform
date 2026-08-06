const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            username,
            password,
            role,
            profession
        } = req.body;


        //check if email already exists

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {

            return res.status(400).json({
                message: "Email already exists."
            });

        }


        //check if username already exists

        const existingUsername = await User.findOne({ username });

        if (existingUsername) {

            return res.status(400).json({
                message: "Username already exists."
            });

        }


        //set account status

        let status = "active";

        if (role === "volunteer") {

            status = "pending";

        }


        //create user

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({

            name,
            email,
            username,
            password: hashedPassword,
            role,
            profession,
            status

        });


        await user.save();


        //response messages

        if (role === "volunteer") {

            return res.status(201).json({

                message:
                    "Your volunteer application has been submitted successfully and is awaiting approval."

            });

        }


        return res.status(201).json({

            message:
                "Account created successfully."

        });


    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Something went wrong."

        });

    }

};


const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;


        //find user

        const user = await User.findOne({ email });


        if (!user) {

            return res.status(400).json({

                message: "Invalid email or password."

            });

        }


        //compare passwords

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );


        if (!passwordMatch) {

            return res.status(400).json({

                message: "Invalid email or password."

            });

        }


        //check account status

        if (user.status === "pending") {

            return res.status(403).json({

                message:
                    "Your volunteer application is awaiting approval."

            });

        }


        if (user.status === "suspended") {

            return res.status(403).json({

                message:
                    "This account has been suspended."

            });

        }


        const token = jwt.sign(

            {

                id: user._id,
                role: user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "24h"

            }

        );


        return res.status(200).json({

    message: "Login successful.",

    token,

    role: user.role,

    username: user.username,

    userId: user._id

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

    registerUser,
    loginUser

};
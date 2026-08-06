import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");


    const handleLogin = async () => {

        try {

            const response = await axios.post(

                "http://localhost:5000/api/auth/login",

                {

                    email,
                    password

                }

            );


            localStorage.setItem(

                "token",

                response.data.token

            );


            localStorage.setItem(

                "role",

                response.data.role

            );


            localStorage.setItem(

                "username",

                response.data.username

            );


            localStorage.setItem(

                "userId",

                response.data.userId

            );


            setMessage(

                response.data.message

            );


            if (response.data.role === "user") {

                navigate("/user");

            }

            else {

                navigate("/volunteer");

            }

        }

        catch (error) {

            setMessage(

                error.response?.data?.message ||

                "Unable to log in. Please check your details."

            );

        }

    };


    return (

        <div className="login-page">

            <div className="login-container">


                <div className="login-brand">

                    <div className="login-logo">

                        M

                    </div>

                    <h1>

                        Mind<span>Share</span>

                    </h1>

                    <p>

                        A safe space to connect,
                        talk and be heard.

                    </p>

                </div>


                <div className="login-card">

                    <h2>

                        Welcome Back

                    </h2>


                    <p className="login-subtitle">

                        Sign in to continue to your
                        MindShare account.

                    </p>


                    <div className="form-group">

                        <label>

                            Email Address

                        </label>


                        <input

                            type="email"

                            placeholder="Enter your email"

                            value={email}

                            onChange={(event) =>

                                setEmail(event.target.value)

                            }

                        />

                    </div>


                    <div className="form-group">

                        <label>

                            Password

                        </label>


                        <input

                            type="password"

                            placeholder="Enter your password"

                            value={password}

                            onChange={(event) =>

                                setPassword(event.target.value)

                            }

                        />

                    </div>


                    <button

                        className="login-button"

                        onClick={handleLogin}

                    >

                        Sign In

                    </button>


                    {message && (

                        <p className="login-message">

                            {message}

                        </p>

                    )}


                    <div className="login-divider">

                        <span>or</span>

                    </div>


                    <p className="register-prompt">

                        Don't have a MindShare account?

                    </p>


                    <button

                        className="register-button"

                        onClick={() =>

                            navigate("/register")

                        }

                    >

                        Create an Account

                    </button>

                </div>


                <p className="login-footer">

                    MindShare • Mental health support
                    through human connection

                </p>

            </div>

        </div>

    );

}


export default Login;
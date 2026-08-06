import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [role, setRole] = useState("user");

    const [profession, setProfession] = useState("");

    const [message, setMessage] = useState("");


    const handleRegister = async () => {

        try {

            const response = await axios.post(

                "http://localhost:5000/api/auth/register",

                {

                    name,
                    email,
                    username,
                    password,
                    role,
                    profession

                }

            );


            setMessage(

                response.data.message

            );


            setTimeout(() => {

                navigate("/login");

            }, 2000);

        }

        catch (error) {

            setMessage(

                error.response?.data?.message ||

                "Unable to create your account. Please try again."

            );

        }

    };


    return (

        <div className="register-page">

            <div className="register-container">


                <div className="register-brand">

                    <div className="register-logo">

                        M

                    </div>


                    <h1>

                        Mind<span>Share</span>

                    </h1>


                    <p>

                        Create your account and
                        join a community built
                        around human connection.

                    </p>

                </div>


                <div className="register-card">

                    <h2>

                        Create Your Account

                    </h2>


                    <p className="register-subtitle">

                        Get started with MindShare
                        today.

                    </p>


                    <div className="register-form-group">

                        <label>

                            Full Name

                        </label>


                        <input

                            type="text"

                            placeholder="Enter your full name"

                            value={name}

                            onChange={(event) =>

                                setName(event.target.value)

                            }

                        />

                    </div>


                    <div className="register-form-group">

                        <label>

                            Email Address

                        </label>


                        <input

                            type="email"

                            placeholder="Enter your email address"

                            value={email}

                            onChange={(event) =>

                                setEmail(event.target.value)

                            }

                        />

                    </div>


                    <div className="register-form-group">

                        <label>

                            Username

                        </label>


                        <input

                            type="text"

                            placeholder="Choose a username"

                            value={username}

                            onChange={(event) =>

                                setUsername(event.target.value)

                            }

                        />

                    </div>


                    <div className="register-form-group">

                        <label>

                            Password

                        </label>


                        <input

                            type="password"

                            placeholder="Create a password"

                            value={password}

                            onChange={(event) =>

                                setPassword(event.target.value)

                            }

                        />

                    </div>


                    <div className="register-form-group">

                        <label>

                            Account Type

                        </label>


                        <select

                            value={role}

                            onChange={(event) =>

                                setRole(event.target.value)

                            }

                        >

                            <option value="user">

                                User — I need support

                            </option>


                            <option value="volunteer">

                                Volunteer — I want to help

                            </option>

                        </select>

                    </div>


                    {role === "volunteer" && (

                        <div className="register-volunteer-box">

                            <div className="volunteer-box-title">

                                Volunteer Information

                            </div>


                            <p>

                                Please tell us your
                                professional area so
                                we understand how you
                                can support MindShare users.

                            </p>


                            <input

                                type="text"

                                placeholder="e.g. Counsellor, Psychologist"

                                value={profession}

                                onChange={(event) =>

                                    setProfession(event.target.value)

                                }

                            />

                        </div>

                    )}


                    <button

                        className="register-button"

                        onClick={handleRegister}

                    >

                        Create Account

                    </button>


                    {message && (

                        <p className="register-message">

                            {message}

                        </p>

                    )}


                    <div className="register-divider">

                        <span>or</span>

                    </div>


                    <p className="login-prompt">

                        Already have a MindShare account?

                    </p>


                    <button

                        className="login-button"

                        onClick={() =>

                            navigate("/login")

                        }

                    >

                        Sign In

                    </button>

                </div>


                <p className="register-footer">

                    MindShare • A safe space to connect,
                    talk and be heard

                </p>

            </div>

        </div>

    );

}


export default Register;
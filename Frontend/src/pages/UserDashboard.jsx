import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function UserDashboard() {

    const navigate = useNavigate();

    const requestSession = async () => {

        try {

            const username = localStorage.getItem("username");

            const userId = localStorage.getItem("userId");


            console.log("USERNAME:");

            console.log(username);


            console.log("USER ID:");

            console.log(userId);


            console.log("Sending request...");


            const response = await axios.post(

                "http://localhost:5000/api/session/create",

                {

                    username,

                    userId

                }

            );


            console.log(response.data.message);


            console.log("REQUEST SUCCESSFUL");


            navigate("/waiting-room");

        }

        catch (error) {

            console.log(error);

        }

    };


    const username =

        localStorage.getItem("username") || "there";


    return (

        <div>

            <Navbar />


            <div className="page-container">

                <section
                    style={{
                        background:
                            "linear-gradient(135deg, #2563eb, #1d4ed8)",
                        borderRadius: "18px",
                        padding: "40px",
                        color: "white",
                        marginBottom: "28px",
                        boxShadow:
                            "0 16px 40px rgba(37, 99, 235, 0.18)"
                    }}
                >

                    <p
                        style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            opacity: "0.85",
                            marginBottom: "8px"
                        }}
                    >
                        MINDSHARE SUPPORT
                    </p>


                    <h1
                        style={{
                            fontSize: "34px",
                            marginBottom: "10px"
                        }}
                    >
                        Welcome back, {username}
                    </h1>


                    <p
                        style={{
                            maxWidth: "650px",
                            fontSize: "16px",
                            opacity: "0.9",
                            marginBottom: "24px"
                        }}
                    >
                        You don't have to face difficult moments alone.
                        MindShare connects you with someone who is
                        ready to listen and support you.
                    </p>


                    <button
                        className="btn"
                        onClick={requestSession}
                        style={{
                            background: "white",
                            color: "#2563eb",
                            padding: "13px 22px",
                            fontSize: "15px"
                        }}
                    >
                        Find Support
                    </button>

                </section>


                <div className="page-header">

                    <h1
                        style={{
                            fontSize: "24px"
                        }}
                    >
                        Your Support Centre
                    </h1>


                    <p>
                        Access the services available to you through
                        MindShare.
                    </p>

                </div>


                <div className="grid grid-2">


                    <div className="card">

                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                background: "#eff6ff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "22px",
                                marginBottom: "18px"
                            }}
                        >
                            💬
                        </div>


                        <h2
                            style={{
                                fontSize: "19px",
                                marginBottom: "8px"
                            }}
                        >
                            Previous Conversations
                        </h2>


                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "14px",
                                marginBottom: "20px"
                            }}
                        >
                            View your previous support sessions and
                            conversations whenever you need them.
                        </p>


                        <button
                            className="btn btn-secondary"
                            onClick={() =>
                                navigate("/chat-history")
                            }
                        >
                            View Chat History
                        </button>

                    </div>


                    <div
                        className="card"
                        style={{
                            border: "1px solid #fecaca",
                            background: "#fffafa"
                        }}
                    >

                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                background: "#fef2f2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "22px",
                                marginBottom: "18px"
                            }}
                        >
                            🆘
                        </div>


                        <h2
                            style={{
                                fontSize: "19px",
                                marginBottom: "8px"
                            }}
                        >
                            Emergency Support
                        </h2>


                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "14px",
                                marginBottom: "20px"
                            }}
                        >
                            If you are experiencing an emergency,
                            access important emergency contacts
                            immediately.
                        </p>


                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                navigate("/emergency")
                            }
                        >
                            Emergency Help
                        </button>

                    </div>

                </div>


                <section
                    className="card"
                    style={{
                        marginTop: "28px",
                        background: "#f8fafc"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            alignItems: "flex-start"
                        }}
                    >

                        <div
                            style={{
                                fontSize: "28px"
                            }}
                        >
                            🌱
                        </div>


                        <div>

                            <h2
                                style={{
                                    fontSize: "20px",
                                    marginBottom: "8px"
                                }}
                            >
                                A space where you can be heard
                            </h2>


                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "14px",
                                    maxWidth: "750px"
                                }}
                            >
                                MindShare provides a safe space for
                                people seeking someone to talk to.
                                When you request a session, an available
                                volunteer can connect with you for a
                                private conversation.
                            </p>

                        </div>

                    </div>

                </section>


                <div
                    style={{
                        marginTop: "20px",
                        padding: "16px 18px",
                        borderRadius: "12px",
                        background: "#fffbeb",
                        border: "1px solid #fde68a",
                        color: "#92400e",
                        fontSize: "13px"
                    }}
                >

                    <strong>
                        Important:
                    </strong>{" "}

                    MindShare volunteers provide peer support and
                    are not a replacement for emergency services or
                    professional medical care. If you are in immediate
                    danger, please use the Emergency Help option.

                </div>

            </div>

        </div>

    );

}


export default UserDashboard;
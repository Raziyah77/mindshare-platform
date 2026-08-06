import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function VolunteerDashboard() {

    const navigate = useNavigate();

    const username =
        localStorage.getItem("username") || "Volunteer";


    return (

        <div>

            <Navbar />


            <div className="page-container">

                {/* Welcome Section */}

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
                        MINDSHARE VOLUNTEER CENTRE
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
                            maxWidth: "680px",
                            fontSize: "16px",
                            opacity: "0.9",
                            marginBottom: "24px"
                        }}
                    >
                        Thank you for giving your time and expertise
                        to help make mental health support more
                        accessible.
                    </p>


                    <button
                        className="btn"
                        onClick={() =>
                            navigate("/requests")
                        }
                        style={{
                            background: "white",
                            color: "#2563eb",
                            padding: "13px 22px",
                            fontSize: "15px"
                        }}
                    >
                        Find Someone to Support
                    </button>

                </section>


                {/* Dashboard Heading */}

                <div className="page-header">

                    <h1
                        style={{
                            fontSize: "24px"
                        }}
                    >
                        Volunteer Centre
                    </h1>


                    <p>
                        Manage support requests, sessions and your
                        previous conversations.
                    </p>

                </div>


                {/* Main Actions */}

                <div className="grid grid-2">


                    {/* Available Requests */}

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
                            🤝
                        </div>


                        <h2
                            style={{
                                fontSize: "19px",
                                marginBottom: "8px"
                            }}
                        >
                            Available Requests
                        </h2>


                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "14px",
                                marginBottom: "20px"
                            }}
                        >
                            View people currently waiting for
                            support and choose a session you are
                            available to take.
                        </p>


                        <button
                            className="btn btn-secondary"
                            onClick={() =>
                                navigate("/requests")
                            }
                        >
                            View Available Requests
                        </button>

                    </div>


                    {/* My Sessions */}

                    <div className="card">

                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                background: "#f0fdf4",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "22px",
                                marginBottom: "18px"
                            }}
                        >
                            🫶
                        </div>


                        <h2
                            style={{
                                fontSize: "19px",
                                marginBottom: "8px"
                            }}
                        >
                            My Sessions
                        </h2>


                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "14px",
                                marginBottom: "20px"
                            }}
                        >
                            Access the support sessions that you
                            have personally accepted.
                        </p>


                        <button
                            className="btn btn-secondary"
                            onClick={() =>
                                navigate("/accepted-requests")
                            }
                        >
                            View My Sessions
                        </button>

                    </div>


                    {/* Chat History */}

                    <div className="card">

                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                background: "#f5f3ff",
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
                            Conversation History
                        </h2>


                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "14px",
                                marginBottom: "20px"
                            }}
                        >
                            Review conversations from previous
                            support sessions you participated in.
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


                    {/* Volunteer Information */}

                    <div
                        className="card"
                        style={{
                            background: "#f8fafc"
                        }}
                    >

                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                background: "#eef2ff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "22px",
                                marginBottom: "18px"
                            }}
                        >
                            🌱
                        </div>


                        <h2
                            style={{
                                fontSize: "19px",
                                marginBottom: "8px"
                            }}
                        >
                            Your Impact Matters
                        </h2>


                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "14px",
                                lineHeight: "1.6"
                            }}
                        >
                            Every conversation can make a difference.
                            By volunteering your time, you help create
                            a space where someone can feel heard,
                            supported and understood.
                        </p>

                    </div>

                </div>


                {/* Volunteer Reminder */}

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
                            💙
                        </div>


                        <div>

                            <h2
                                style={{
                                    fontSize: "20px",
                                    marginBottom: "8px"
                                }}
                            >
                                A little reminder
                            </h2>


                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "14px",
                                    maxWidth: "750px"
                                }}
                            >
                                Listen with empathy, respect the
                                person's privacy and remember that
                                you are providing peer support.
                                If a situation becomes an emergency
                                or goes beyond your role, encourage
                                the person to seek appropriate
                                professional or emergency assistance.
                            </p>

                        </div>

                    </div>

                </section>


                {/* Status Notice */}

                <div
                    style={{
                        marginTop: "20px",
                        padding: "16px 18px",
                        borderRadius: "12px",
                        background: "#eff6ff",
                        border: "1px solid #bfdbfe",
                        color: "#1e40af",
                        fontSize: "13px"
                    }}
                >

                    <strong>
                        Thank you:
                    </strong>{" "}

                    Your willingness to listen and support others
                    is an important part of the MindShare community.

                </div>

            </div>

        </div>

    );

}


export default VolunteerDashboard;
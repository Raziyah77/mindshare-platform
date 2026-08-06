import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./AcceptedRequests.css";

function AcceptedRequests() {

    const navigate = useNavigate();

    const [requests, setRequests] = useState([]);


    useEffect(() => {

        fetchAcceptedRequests();

    }, []);


    const fetchAcceptedRequests = async () => {

        try {

            const volunteerId = localStorage.getItem("userId");


            if (!volunteerId) {

                console.log("Volunteer ID not found.");

                return;

            }


            const response = await axios.get(

                `http://localhost:5000/api/session/accepted?volunteerId=${volunteerId}`

            );


            setRequests(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };


    const joinSession = (sessionId) => {

        navigate(`/chat-room/${sessionId}`);

    };


    return (

        <div className="accepted-page">

            <Navbar />


            <main className="accepted-container">

                <section className="accepted-header">

                    <div className="accepted-header-content">

                        <p className="accepted-eyebrow">
                            VOLUNTEER WORKSPACE
                        </p>


                        <h1>
                            My Sessions
                        </h1>


                        <p className="accepted-subtitle">

                            Manage the support sessions you have
                            accepted and connect with people who
                            are waiting for your support.

                        </p>

                    </div>


                    <div className="session-count">

                        <span className="session-count-number">
                            {requests.length}
                        </span>

                        <span className="session-count-label">
                            Active Sessions
                        </span>

                    </div>

                </section>


                <section className="session-info-banner">

                    <div className="session-info-icon">
                        💙
                    </div>


                    <div>

                        <h3>
                            Your support matters
                        </h3>

                        <p>

                            Each accepted session represents someone
                            who has reached out for support. Take your
                            time, listen with compassion and create a
                            respectful space for conversation.

                        </p>

                    </div>

                </section>


                {requests.length === 0 ? (

                    <section className="empty-sessions">

                        <div className="empty-icon">
                            💬
                        </div>


                        <h2>
                            No active sessions yet
                        </h2>


                        <p>

                            You have not accepted any support requests
                            yet. Available requests will appear when
                            users are waiting for a volunteer.

                        </p>


                        <button

                            className="browse-requests-button"

                            onClick={() =>

                                navigate("/requests")

                            }

                        >

                            Browse Available Requests

                            <span>
                                →
                            </span>

                        </button>

                    </section>

                ) : (

                    <section>

                        <div className="sessions-section-heading">

                            <div>

                                <h2>
                                    Your Accepted Sessions
                                </h2>

                                <p>
                                    Select a session below to begin
                                    your conversation.
                                </p>

                            </div>

                        </div>


                        <div className="sessions-grid">

                            {requests.map((request) => (

                                <article
                                    className="session-card"
                                    key={request._id}
                                >

                                    <div className="session-card-top">

                                        <div className="session-avatar">

                                            {request.username
                                                ? request.username
                                                    .charAt(0)
                                                    .toUpperCase()
                                                : "U"}

                                        </div>


                                        <div className="session-user">

                                            <h2>
                                                {request.username}
                                            </h2>

                                            <p>
                                                MindShare Support Session
                                            </p>

                                        </div>


                                        <span className="status-badge">

                                            <span className="status-dot">
                                            </span>

                                            {request.status}

                                        </span>

                                    </div>


                                    <div className="session-divider">
                                    </div>


                                    <div className="session-details">

                                        <div className="session-detail">

                                            <span className="detail-label">
                                                Session ID
                                            </span>

                                            <span className="detail-value">

                                                #{request._id.slice(-8)}

                                            </span>

                                        </div>


                                        <div className="session-detail">

                                            <span className="detail-label">
                                                Accepted
                                            </span>

                                            <span className="detail-value">

                                                {new Date(
                                                    request.updatedAt ||
                                                    request.createdAt
                                                ).toLocaleDateString()}

                                            </span>

                                        </div>


                                        <div className="session-detail">

                                            <span className="detail-label">
                                                Session Type
                                            </span>

                                            <span className="detail-value">
                                                Support Chat
                                            </span>

                                        </div>

                                    </div>


                                    <div className="session-card-footer">

                                        <div className="session-ready">

                                            <span className="ready-icon">
                                                ●
                                            </span>

                                            Ready to join

                                        </div>


                                        <button

                                            className="join-session-button"

                                            onClick={() =>

                                                joinSession(request._id)

                                            }

                                        >

                                            Join Session

                                            <span>
                                                →
                                            </span>

                                        </button>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </section>

                )}


                <div className="accepted-bottom-actions">

                    <button

                        className="secondary-action-button"

                        onClick={() => navigate("/requests")}

                    >

                        ← Available Requests

                    </button>


                    <button

                        className="secondary-action-button"

                        onClick={() => navigate("/chat-history")}

                    >

                        View Chat History →

                    </button>

                </div>

            </main>

        </div>

    );

}


export default AcceptedRequests;
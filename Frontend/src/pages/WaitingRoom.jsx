import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./WaitingRoom.css";

function WaitingRoom() {

    const navigate = useNavigate();

    const [status, setStatus] = useState("waiting");

    const [sessionId, setSessionId] = useState(null);


    const fetchStatus = async () => {

        try {

            const username = localStorage.getItem("username");


            const response = await axios.get(

                `http://localhost:5000/api/session/status/${username}`

            );


            setStatus(response.data.status);

            setSessionId(response.data._id);

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        fetchStatus();


        const interval = setInterval(() => {

            fetchStatus();

        }, 5000);


        return () => {

            clearInterval(interval);

        };

    }, []);


    const joinSession = () => {

        if (!sessionId) {

            return;

        }


        navigate(`/chat-room/${sessionId}`);

    };


    return (

        <div className="waiting-page">

            <Navbar />


            <main className="waiting-container">

                <div className="waiting-card">

                    {status === "waiting" ? (

                        <>

                            <div className="waiting-icon">

                                ⏳

                            </div>


                            <span className="waiting-badge">

                                REQUEST RECEIVED

                            </span>


                            <h1>

                                We're finding the right person for you.

                            </h1>


                            <p className="waiting-description">

                                Your request has been submitted successfully.
                                Please stay with us while we connect you
                                with an available MindShare volunteer.

                            </p>


                            <div className="waiting-loader">

                                <div className="loader-dot"></div>

                                <div className="loader-dot"></div>

                                <div className="loader-dot"></div>

                            </div>


                            <p className="waiting-status">

                                Looking for an available volunteer...

                            </p>


                            <div className="waiting-info">

                                <div className="info-item">

                                    <span className="info-icon">

                                        🔒

                                    </span>

                                    <div>

                                        <strong>

                                            Private & Confidential

                                        </strong>

                                        <p>

                                            Your conversation will remain private.

                                        </p>

                                    </div>

                                </div>


                                <div className="info-item">

                                    <span className="info-icon">

                                        💙

                                    </span>

                                    <div>

                                        <strong>

                                            You're Not Alone

                                        </strong>

                                        <p>

                                            Someone will be with you shortly.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </>

                    ) : (

                        <>

                            <div className="ready-icon">

                                ✓

                            </div>


                            <span className="ready-badge">

                                VOLUNTEER FOUND

                            </span>


                            <h1>

                                Your session is ready.

                            </h1>


                            <p className="waiting-description">

                                An available MindShare volunteer has
                                accepted your request. You can now
                                enter your private conversation.

                            </p>


                            <button

                                className="join-session-button"

                                onClick={joinSession}

                            >

                                Join Session

                                <span>

                                    →

                                </span>

                            </button>


                            <div className="ready-note">

                                🔒 Your conversation is private and confidential.

                            </div>

                        </>

                    )}

                </div>


                <button

                    className="back-dashboard-button"

                    onClick={() => navigate("/user")}

                >

                    ← Back to Dashboard

                </button>

            </main>

        </div>

    );

}


export default WaitingRoom;
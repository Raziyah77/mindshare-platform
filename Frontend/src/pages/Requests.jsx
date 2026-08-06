import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Requests.css";

function Requests() {

    const navigate = useNavigate();

    const [requests, setRequests] = useState([]);


    useEffect(() => {

        fetchRequests();

    }, []);


    const fetchRequests = async () => {

        try {

            const response = await axios.get(

                "http://localhost:5000/api/session/waiting"

            );

            setRequests(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };


    const acceptRequest = async (id) => {

        try {

            const volunteerId = localStorage.getItem("userId");


            if (!volunteerId) {

                console.log("Volunteer ID not found.");

                return;

            }


            const response = await axios.put(

                `http://localhost:5000/api/session/accept/${id}`,

                {

                    volunteerId

                }

            );


            console.log(response.data.message);

            fetchRequests();

        }

        catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="requests-page">

            <Navbar />


            <main className="requests-content">

                <header className="requests-header">

                    <div>

                        <p className="requests-eyebrow">

                            VOLUNTEER PORTAL

                        </p>


                        <h1>

                            Available Requests

                        </h1>


                        <p className="requests-subtitle">

                            People are reaching out for support.
                            Browse the available requests below
                            and choose a conversation you are
                            ready to take.

                        </p>

                    </div>

                </header>


                {requests.length === 0 ? (

                    <div className="requests-empty">

                        <div className="empty-icon">

                            ✓

                        </div>


                        <h2>

                            No requests right now

                        </h2>


                        <p>

                            There are currently no waiting session
                            requests. New requests will appear here
                            when someone asks for support.

                        </p>

                    </div>

                ) : (

                    <div className="requests-grid">

                        {requests.map((request) => (

                            <article
                                className="request-card"
                                key={request._id}
                            >

                                <div className="request-card-top">

                                    <div className="request-avatar">

                                        {request.username
                                            ? request.username
                                                .charAt(0)
                                                .toUpperCase()
                                            : "U"}

                                    </div>


                                    <div>

                                        <h2>

                                            Support Request

                                        </h2>


                                        <span className="request-status">

                                            Waiting for volunteer

                                        </span>

                                    </div>

                                </div>


                                <div className="request-details">

                                    <div className="request-detail">

                                        <span className="detail-label">

                                            Username

                                        </span>


                                        <span className="detail-value">

                                            {request.username}

                                        </span>

                                    </div>


                                    <div className="request-detail">

                                        <span className="detail-label">

                                            Request status

                                        </span>


                                        <span className="detail-value">

                                            {request.status}

                                        </span>

                                    </div>

                                </div>


                                <button

                                    className="primary-action"

                                    onClick={() =>

                                        acceptRequest(request._id)

                                    }

                                >

                                    Accept Request

                                </button>

                            </article>

                        ))}

                    </div>

                )}


                <button

                    className="back-dashboard"

                    onClick={() =>

                        navigate("/volunteer")

                    }

                >

                    ← Back to Dashboard

                </button>

            </main>

        </div>

    );

}


export default Requests;
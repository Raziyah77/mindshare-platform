import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./ChatHistory.css";

function ChatHistory() {

    const navigate = useNavigate();

    const [sessions, setSessions] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetchHistory();

    }, []);


    const fetchHistory = async () => {

        try {

            const role = localStorage.getItem("role");

            const userId = localStorage.getItem("userId");


            if (!role || !userId) {

                console.log("User information not found.");

                setLoading(false);

                return;

            }


            let response;


            if (role === "volunteer") {

                response = await axios.get(

                    `http://localhost:5000/api/session/history/volunteer/${userId}`

                );

            }

            else {

                response = await axios.get(

                    `http://localhost:5000/api/session/history/user/${userId}`

                );

            }


            setSessions(response.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };


    const viewConversation = (sessionId) => {

        navigate(`/chat-history/${sessionId}`);

    };


    if (loading) {

        return (

            <div className="history-page">

                <Navbar />

                <main className="history-container">

                    <div className="history-header">

                        <div className="history-icon">
                            💬
                        </div>

                        <h1>
                            Chat History
                        </h1>

                        <p>
                            Loading your previous conversations...
                        </p>

                    </div>

                </main>

            </div>

        );

    }


    return (

        <div className="history-page">

            <Navbar />


            <main className="history-container">

                <div className="history-header">

                    <div className="history-icon">
                        💬
                    </div>

                    <h1>
                        Chat History
                    </h1>

                    <p>
                        View and revisit your previous MindShare conversations.
                    </p>

                </div>


                {sessions.length === 0 ? (

                    <div className="empty-history">

                        <div className="empty-icon">
                            💭
                        </div>

                        <h2>
                            No conversations yet
                        </h2>

                        <p>
                            You do not have any previous conversations.
                            Your completed MindShare sessions will appear here.
                        </p>


                        <button

                            className="history-primary-button"

                            onClick={() => {

                                const role =
                                    localStorage.getItem("role");

                                if (role === "volunteer") {

                                    navigate("/volunteer");

                                }

                                else {

                                    navigate("/user");

                                }

                            }}

                        >

                            Return to Dashboard

                        </button>

                    </div>

                ) : (

                    <div className="conversation-list">

                        <div className="history-count">

                            <span>
                                Your conversations
                            </span>

                            <span className="count-badge">
                                {sessions.length}
                            </span>

                        </div>


                        {sessions.map((session, index) => (

                            <div

                                className="conversation-card"

                                key={session._id}

                            >

                                <div className="conversation-top">

                                    <div className="conversation-number">

                                        <span>
                                            {sessions.length - index}
                                        </span>

                                    </div>


                                    <div className="conversation-info">

                                        <h3>
                                            MindShare Session
                                        </h3>

                                        <p className="conversation-date">

                                            {new Date(
                                                session.createdAt
                                            ).toLocaleString()}

                                        </p>

                                    </div>


                                    <div

                                        className={`status-badge ${
                                            session.status === "completed"
                                                ? "completed"
                                                : "other-status"
                                        }`}

                                    >

                                        {session.status}

                                    </div>

                                </div>


                                <div className="conversation-divider"></div>


                                <div className="conversation-bottom">

                                    <div className="conversation-details">

                                        <span>
                                            Session ID
                                        </span>

                                        <strong>
                                            {session._id}
                                        </strong>

                                    </div>


                                    <button

                                        className="view-conversation-button"

                                        onClick={() =>
                                            viewConversation(session._id)
                                        }

                                    >

                                        View Conversation

                                        <span>
                                            →
                                        </span>

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </main>

        </div>

    );

}


export default ChatHistory;
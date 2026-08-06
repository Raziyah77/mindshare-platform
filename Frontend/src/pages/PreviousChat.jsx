import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./PreviousChat.css";

function PreviousChat() {

    const navigate = useNavigate();

    const { sessionId } = useParams();

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        fetchMessages();

    }, [sessionId]);


    const fetchMessages = async () => {

        try {

            const viewerId = localStorage.getItem("userId");

            const viewerRole = localStorage.getItem("role");


            const response = await axios.get(

                `http://localhost:5000/api/message/${sessionId}`,

                {

                    params: {

                        viewerId,

                        viewerRole

                    }

                }

            );


            setMessages(response.data);

        }

        catch (error) {

            console.log(error);

            if (error.response?.status === 403) {

                setError(
                    "You are not authorized to view this conversation."
                );

            }

            else if (error.response?.status === 404) {

                setError(
                    "This conversation could not be found."
                );

            }

            else {

                setError(
                    "Something went wrong while loading this conversation."
                );

            }

        }

        finally {

            setLoading(false);

        }

    };


    const role = localStorage.getItem("role");


    const getSenderName = (sender) => {

        if (sender === role) {

            return "You";

        }


        if (sender === "user") {

            return "User";

        }


        return "Volunteer";

    };


    const getSenderClass = (sender) => {

        if (sender === role) {

            return "message-you";

        }


        if (sender === "user") {

            return "message-user";

        }


        return "message-volunteer";

    };


    return (

        <div className="previous-chat-page">

            <Navbar />


            <main className="previous-chat-container">


                <div className="previous-chat-header">

                    <button

                        className="back-button"

                        onClick={() =>
                            navigate("/chat-history")
                        }

                    >

                        ← Back to Chat History

                    </button>


                    <div className="chat-title-area">

                        <div className="chat-title-icon">
                            💬
                        </div>


                        <div>

                            <h1>
                                Previous Conversation
                            </h1>

                            <p>
                                Review your MindShare session.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="conversation-panel">


                    <div className="conversation-panel-header">

                        <div>

                            <h2>
                                Conversation
                            </h2>

                            <p>
                                Session ID: {sessionId}
                            </p>

                        </div>


                        <div className="history-label">

                            <span className="history-dot"></span>

                            Archived Session

                        </div>

                    </div>


                    <div className="conversation-content">


                        {loading ? (

                            <div className="conversation-state">

                                <div className="state-icon">
                                    ⏳
                                </div>

                                <h3>
                                    Loading conversation...
                                </h3>

                                <p>
                                    Please wait while we retrieve your messages.
                                </p>

                            </div>

                        ) : error ? (

                            <div className="conversation-state error-state">

                                <div className="state-icon">
                                    🔒
                                </div>

                                <h3>
                                    Conversation unavailable
                                </h3>

                                <p>
                                    {error}
                                </p>


                                <button

                                    className="history-button"

                                    onClick={() =>
                                        navigate("/chat-history")
                                    }

                                >

                                    Return to Chat History

                                </button>

                            </div>

                        ) : messages.length === 0 ? (

                            <div className="conversation-state">

                                <div className="state-icon">
                                    💭
                                </div>

                                <h3>
                                    No messages recorded
                                </h3>

                                <p>
                                    No messages were recorded for this session.
                                </p>


                                <button

                                    className="history-button"

                                    onClick={() =>
                                        navigate("/chat-history")
                                    }

                                >

                                    Back to Chat History

                                </button>

                            </div>

                        ) : (

                            <div className="messages-container">

                                {messages.map((message) => (

                                    <div

                                        key={message._id}

                                        className={`message-row ${getSenderClass(
                                            message.sender
                                        )}`}

                                    >

                                        <div className="message-avatar">

                                            {getSenderName(
                                                message.sender
                                            ).charAt(0)}

                                        </div>


                                        <div className="message-bubble">

                                            <div className="message-meta">

                                                <strong>

                                                    {getSenderName(
                                                        message.sender
                                                    )}

                                                </strong>


                                                <span>

                                                    {new Date(
                                                        message.createdAt
                                                    ).toLocaleTimeString(
                                                        [],
                                                        {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        }
                                                    )}

                                                </span>

                                            </div>


                                            <p>

                                                {message.text}

                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>


                    {!loading &&
                        !error &&
                        messages.length > 0 && (

                            <div className="conversation-footer">

                                <p>
                                    This is an archived MindShare conversation.
                                </p>


                                <button

                                    onClick={() =>
                                        navigate("/chat-history")
                                    }

                                >

                                    Back to Chat History

                                </button>

                            </div>

                        )}

                </div>

            </main>

        </div>

    );

}


export default PreviousChat;
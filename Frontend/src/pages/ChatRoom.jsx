import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./ChatRoom.css";

function ChatRoom() {

    const navigate = useNavigate();
    const { sessionId } = useParams();

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [sessionEnded, setSessionEnded] = useState(false);
    const [sessionReported, setSessionReported] = useState(false);
    const [showReportForm, setShowReportForm] = useState(false);
    const [reportDescription, setReportDescription] = useState("");
    const [reportMessage, setReportMessage] = useState("");

    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");

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

        }

    };


    const checkSessionStatus = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/api/session/status/id/${sessionId}`
            );

            if (response.data.status === "completed") {

                setSessionEnded(true);
                setSessionReported(false);
                setMessage("");

            }

            else if (response.data.status === "reported") {

                setSessionReported(true);
                setSessionEnded(false);
                setMessage("");

            }

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        fetchMessages();
        checkSessionStatus();

        const messageInterval = setInterval(() => {
            fetchMessages();
        }, 1000);

        const statusInterval = setInterval(() => {
            checkSessionStatus();
        }, 1000);

        return () => {

            clearInterval(messageInterval);
            clearInterval(statusInterval);

        };

    }, [sessionId]);


    const sendMessage = async () => {

        if (
            message.trim() === "" ||
            sessionEnded ||
            sessionReported
        ) {
            return;
        }

        try {

            await axios.post(
                "http://localhost:5000/api/message/send",
                {
                    sessionId,
                    senderId: localStorage.getItem("userId"),
                    senderRole: localStorage.getItem("role"),
                    text: message
                }
            );

            await fetchMessages();

            setMessage("");

        }

        catch (error) {

            console.log(error);

        }

    };


    const handleKeyDown = (event) => {

        if (event.key === "Enter") {

            sendMessage();

        }

    };


    const endSession = async () => {

        try {

            await axios.put(
                `http://localhost:5000/api/session/end/${sessionId}`
            );

            setSessionEnded(true);
            setMessage("");

        }

        catch (error) {

            console.log(error);

        }

    };


    const submitReport = async () => {

        if (reportDescription.trim() === "") {

            setReportMessage(
                "Please describe what happened before submitting the report."
            );

            return;

        }

        try {

            const reporterId = localStorage.getItem("userId");
            const reporterRole = localStorage.getItem("role");

            await axios.post(
                `http://localhost:5000/api/report/${sessionId}`,
                {
                    reporterId,
                    reporterRole,
                    description: reportDescription
                }
            );

            setSessionReported(true);
            setShowReportForm(false);
            setReportDescription("");
            setReportMessage("");
            setMessage("");

        }

        catch (error) {

            console.log(error);

            setReportMessage(
                error.response?.data?.message ||
                "Something went wrong while submitting the report."
            );

        }

    };


    const returnToDashboard = () => {

        if (role === "volunteer") {

            navigate("/volunteer");

        }

        else {

            navigate("/user");

        }

    };


    const getSenderName = (sender) => {

        if (sender === role) {

            return "You";

        }

        if (sender === "user") {

            return "User";

        }

        return "Volunteer";

    };


    return (

        <div className="chat-page">

            <Navbar />


            <main className="chat-container">


                {sessionReported ? (

                    <div className="session-ended-card reported-card">

                        <div className="status-icon">
                            !
                        </div>

                        <h1>
                            Session Reported
                        </h1>

                        <p>
                            This session has been reported and ended.
                        </p>

                        <p className="secondary-message">
                            Thank you for bringing this matter to our attention.
                        </p>

                        <button
                            className="primary-button"
                            onClick={returnToDashboard}
                        >
                            Return to Dashboard
                        </button>

                    </div>

                ) : sessionEnded ? (

                    <div className="session-ended-card">

                        <div className="status-icon success-icon">
                            ✓
                        </div>

                        <h1>
                            Session Ended
                        </h1>

                        <p>
                            This session has ended successfully.
                        </p>

                        <p className="secondary-message">
                            Thank you for supporting the MindShare community.
                        </p>

                        <button
                            className="primary-button"
                            onClick={returnToDashboard}
                        >
                            Return to Dashboard
                        </button>

                    </div>

                ) : (

                    <>

                        <section className="chat-welcome">

                            <div>

                                <p className="chat-eyebrow">
                                    {role === "volunteer"
                                        ? "VOLUNTEER SUPPORT SESSION"
                                        : "MINDSHARE SUPPORT SESSION"}
                                </p>

                                <h1>

                                    {role === "volunteer"
                                        ? "You're making a difference."
                                        : "You're in a safe space."}

                                </h1>

                                <p className="chat-welcome-text">

                                    {role === "volunteer"
                                        ? "Thank you for giving your time and expertise to support someone in need."
                                        : "Take your time and share whatever feels comfortable for you."}

                                </p>

                            </div>


                            <div className="session-status">

                                <span className="status-dot"></span>

                                <span>
                                    Session Active
                                </span>

                            </div>

                        </section>


                        <section className="participant-card">

                            <div className="participant-avatar">

                                {role === "volunteer"
                                    ? "U"
                                    : "V"}

                            </div>


                            <div className="participant-info">

                                <span className="participant-label">

                                    {role === "volunteer"
                                        ? "Supporting"
                                        : "Connected with"}

                                </span>

                                <strong>

                                    {role === "volunteer"
                                        ? "MindShare User"
                                        : "MindShare Volunteer"}

                                </strong>

                            </div>


                            <div className="session-reference">

                                <span>
                                    SESSION
                                </span>

                                <strong>
                                    #{sessionId.slice(-6)}
                                </strong>

                            </div>

                        </section>


                        <div className="privacy-notice">

                            <span className="privacy-icon">
                                🔒
                            </span>

                            <p>

                                This conversation is private and intended
                                only for the participants in this session.

                            </p>

                        </div>


                        <section className="conversation-card">

                            <div className="conversation-header">

                                <div>

                                    <h2>
                                        Conversation
                                    </h2>

                                    <p>

                                        {role === "volunteer"
                                            ? "Listen, support and respond with care."
                                            : "Take your time. You don't have to rush."}

                                    </p>

                                </div>


                                <div className="online-indicator">

                                    <span></span>

                                    Online

                                </div>

                            </div>


                            <div className="messages-container">

                                {messages.length === 0 ? (

                                    <div className="empty-conversation">

                                        <div className="empty-icon">
                                            💬
                                        </div>

                                        <h3>

                                            Your conversation starts here

                                        </h3>

                                        <p>

                                            {role === "volunteer"
                                                ? "When the user sends a message, it will appear here."
                                                : "Send a message whenever you're ready."}

                                        </p>

                                    </div>

                                ) : (

                                    messages.map((message) => {

                                        const isOwnMessage =
                                            message.sender === role;

                                        return (

                                            <div
                                                key={message._id}
                                                className={`message-row ${
                                                    isOwnMessage
                                                        ? "message-own"
                                                        : "message-other"
                                                }`}
                                            >

                                                <div className="message-bubble">

                                                    <div className="message-sender">

                                                        {getSenderName(
                                                            message.sender
                                                        )}

                                                    </div>


                                                    <div className="message-text">

                                                        {message.text}

                                                    </div>


                                                    {message.createdAt && (

                                                        <div className="message-time">

                                                            {new Date(
                                                                message.createdAt
                                                            ).toLocaleTimeString(
                                                                [],
                                                                {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit"
                                                                }
                                                            )}

                                                        </div>

                                                    )}

                                                </div>

                                            </div>

                                        );

                                    })

                                )}

                            </div>


                            <div className="message-input-area">

                                <input
                                    type="text"
                                    placeholder={
                                        role === "volunteer"
                                            ? "Write a supportive response..."
                                            : "Type your message..."
                                    }
                                    value={message}
                                    onChange={(event) =>
                                        setMessage(event.target.value)
                                    }
                                    onKeyDown={handleKeyDown}
                                    disabled={
                                        sessionEnded ||
                                        sessionReported
                                    }
                                />


                                <button
                                    className="send-button"
                                    onClick={sendMessage}
                                    disabled={
                                        message.trim() === "" ||
                                        sessionEnded ||
                                        sessionReported
                                    }
                                >
                                    Send
                                </button>

                            </div>


                            <div className="chat-actions">

                                <button
                                    className="end-session-button"
                                    onClick={endSession}
                                >
                                    End Session
                                </button>


                                {!showReportForm && (

                                    <button
                                        className="report-button"
                                        onClick={() => {

                                            setShowReportForm(true);
                                            setReportMessage("");

                                        }}
                                    >
                                        Report Session
                                    </button>

                                )}

                            </div>

                        </section>


                        {showReportForm && (

                            <div className="report-card">

                                <div className="report-header">

                                    <div className="report-icon">
                                        !
                                    </div>

                                    <div>

                                        <h2>
                                            Report This Session
                                        </h2>

                                        <p>
                                            Please tell us what happened.
                                        </p>

                                    </div>

                                </div>


                                <textarea
                                    value={reportDescription}
                                    onChange={(event) =>
                                        setReportDescription(
                                            event.target.value
                                        )
                                    }
                                    placeholder="Describe the issue or misconduct..."
                                    rows="5"
                                />


                                {reportMessage && (

                                    <p className="report-error">
                                        {reportMessage}
                                    </p>

                                )}


                                <div className="report-actions">

                                    <button
                                        className="cancel-button"
                                        onClick={() => {

                                            setShowReportForm(false);
                                            setReportDescription("");
                                            setReportMessage("");

                                        }}
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        className="submit-report-button"
                                        onClick={submitReport}
                                    >
                                        Submit Report
                                    </button>

                                </div>

                            </div>

                        )}


                        {role === "user" && (

                            <div className="emergency-card">

                                <div className="emergency-content">

                                    <div className="emergency-icon">
                                        ♥
                                    </div>

                                    <div>

                                        <h3>
                                            Need urgent support?
                                        </h3>

                                        <p>
                                            Access emergency mental health
                                            resources and support options.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    className="emergency-button"
                                    onClick={() =>
                                        navigate("/emergency")
                                    }
                                >
                                    Emergency Help
                                </button>

                            </div>

                        )}

                    </>

                )}

            </main>

        </div>

    );

}

export default ChatRoom;
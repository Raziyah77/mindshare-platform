import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./UserProfile.css";

function UserProfile() {

    const navigate = useNavigate();

    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    return (

        <div className="user-profile-page">

            <Navbar />

            <main className="profile-container">

                <section className="profile-hero">

                    <div className="profile-avatar">

                        {username
                            ? username.charAt(0).toUpperCase()
                            : "M"}

                    </div>

                    <div>

                        <p className="profile-label">
                            MindShare Member
                        </p>

                        <h1>
                            {username || "MindShare User"}
                        </h1>

                        <p className="profile-subtitle">
                            Your personal MindShare space
                        </p>

                    </div>

                </section>


                <section className="profile-content">

                    <div className="profile-card">

                        <div className="card-heading">

                            <div className="card-icon">
                                👤
                            </div>

                            <div>

                                <h2>
                                    Profile Information
                                </h2>

                                <p>
                                    Your account details
                                </p>

                            </div>

                        </div>


                        <div className="profile-details">

                            <div className="detail-item">

                                <span>
                                    Username
                                </span>

                                <strong>
                                    {username || "Not available"}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Account Type
                                </span>

                                <strong>
                                    {role === "user"
                                        ? "MindShare User"
                                        : role || "Member"}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Account ID
                                </span>

                                <strong className="account-id">
                                    {userId || "Not available"}
                                </strong>

                            </div>

                        </div>

                    </div>


                    <div className="profile-card support-card">

                        <div className="card-heading">

                            <div className="card-icon">
                                💙
                            </div>

                            <div>

                                <h2>
                                    Your MindShare Journey
                                </h2>

                                <p>
                                    Support is always within reach
                                </p>

                            </div>

                        </div>


                        <p className="support-text">

                            MindShare connects you with compassionate
                            volunteer mental health professionals when
                            you need someone to talk to.

                        </p>


                        <div className="profile-actions">

                            <button
                                className="primary-profile-button"
                                onClick={() => navigate("/chat-history")}
                            >
                                View Chat History
                            </button>


                            <button
                                className="secondary-profile-button"
                                onClick={() => navigate("/emergency-help")}
                            >
                                Emergency Help
                            </button>

                        </div>

                    </div>


                    <div className="profile-card privacy-card">

                        <div className="card-heading">

                            <div className="card-icon">
                                🔒
                            </div>

                            <div>

                                <h2>
                                    Your Conversations Matter
                                </h2>

                                <p>
                                    A private space for meaningful conversations
                                </p>

                            </div>

                        </div>


                        <p className="support-text">

                            Your MindShare conversations are associated
                            with your account so you can revisit your
                            previous sessions through your Chat History.

                        </p>

                    </div>

                </section>


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


export default UserProfile;
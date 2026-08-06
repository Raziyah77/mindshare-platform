import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./VolunteerProfile.css";

function VolunteerProfile() {

    const navigate = useNavigate();

    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    return (

        <div className="volunteer-profile-page">

            <Navbar />

            <main className="volunteer-profile-container">

                <section className="volunteer-profile-hero">

                    <div className="volunteer-avatar">

                        {username
                            ? username.charAt(0).toUpperCase()
                            : "V"}

                    </div>

                    <div>

                        <p className="volunteer-label">
                            MINDSHARE VOLUNTEER
                        </p>

                        <h1>
                            {username || "Volunteer"}
                        </h1>

                        <p className="volunteer-subtitle">
                            Mental health support professional
                        </p>

                    </div>

                </section>


                <section className="volunteer-profile-grid">

                    <div className="volunteer-profile-card">

                        <div className="volunteer-card-heading">

                            <div className="volunteer-card-icon">
                                👤
                            </div>

                            <div>

                                <h2>
                                    Professional Profile
                                </h2>

                                <p>
                                    Your MindShare volunteer account
                                </p>

                            </div>

                        </div>


                        <div className="volunteer-details">

                            <div className="volunteer-detail-item">

                                <span>
                                    Username
                                </span>

                                <strong>
                                    {username || "Not available"}
                                </strong>

                            </div>


                            <div className="volunteer-detail-item">

                                <span>
                                    Account Type
                                </span>

                                <strong>
                                    {role === "volunteer"
                                        ? "MindShare Volunteer"
                                        : "Volunteer"}
                                </strong>

                            </div>


                            <div className="volunteer-detail-item">

                                <span>
                                    Volunteer ID
                                </span>

                                <strong className="volunteer-account-id">
                                    {userId || "Not available"}
                                </strong>

                            </div>

                        </div>

                    </div>


                    <div className="volunteer-profile-card contribution-card">

                        <div className="volunteer-card-heading">

                            <div className="volunteer-card-icon">
                                💙
                            </div>

                            <div>

                                <h2>
                                    Your Contribution
                                </h2>

                                <p>
                                    Making support more accessible
                                </p>

                            </div>

                        </div>


                        <p className="volunteer-description">

                            Your time and professional expertise help
                            make mental health support more accessible
                            to people who may otherwise struggle to
                            reach a professional.

                        </p>


                        <div className="volunteer-highlight">

                            <div className="highlight-icon">
                                🤝
                            </div>

                            <div>

                                <strong>
                                    You make a difference.
                                </strong>

                                <p>
                                    Every conversation can matter.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="volunteer-profile-card session-card">

                        <div className="volunteer-card-heading">

                            <div className="volunteer-card-icon">
                                💬
                            </div>

                            <div>

                                <h2>
                                    Your Sessions
                                </h2>

                                <p>
                                    Manage your volunteer activity
                                </p>

                            </div>

                        </div>


                        <p className="volunteer-description">

                            View available requests, manage accepted
                            sessions and revisit previous conversations
                            from one place.

                        </p>


                        <div className="volunteer-actions">

                            <button
                                className="volunteer-primary-button"
                                onClick={() => navigate("/requests")}
                            >
                                Available Requests
                            </button>


                            <button
                                className="volunteer-secondary-button"
                                onClick={() => navigate("/accepted-requests")}
                            >
                                My Sessions
                            </button>


                            <button
                                className="volunteer-secondary-button"
                                onClick={() => navigate("/chat-history")}
                            >
                                Chat History
                            </button>

                        </div>

                    </div>


                    <div className="volunteer-profile-card values-card">

                        <div className="volunteer-card-heading">

                            <div className="volunteer-card-icon">
                                🌱
                            </div>

                            <div>

                                <h2>
                                    The MindShare Mission
                                </h2>

                                <p>
                                    Support, compassion and accessibility
                                </p>

                            </div>

                        </div>


                        <p className="volunteer-description">

                            MindShare aims to create a space where
                            people can access compassionate mental
                            health support without financial barriers
                            standing between them and someone willing
                            to listen.

                        </p>


                        <div className="mission-points">

                            <div>
                                <span>✓</span>
                                Accessible support
                            </div>

                            <div>
                                <span>✓</span>
                                Compassionate conversations
                            </div>

                            <div>
                                <span>✓</span>
                                Community-driven care
                            </div>

                        </div>

                    </div>

                </section>


                <button
                    className="volunteer-back-button"
                    onClick={() => navigate("/volunteer")}
                >
                    ← Back to Dashboard
                </button>

            </main>

        </div>

    );

}


export default VolunteerProfile;
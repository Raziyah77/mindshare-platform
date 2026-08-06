import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./EmergencyHelp.css";

function EmergencyHelp() {

    const navigate = useNavigate();


    return (

        <div className="emergency-page">

            <Navbar />


            <main className="emergency-container">

                <section className="emergency-hero">

                    <div className="emergency-icon">
                        !
                    </div>


                    <div>

                        <p className="emergency-label">
                            URGENT SUPPORT
                        </p>

                        <h1>
                            Emergency Help
                        </h1>

                        <p className="emergency-intro">

                            If you are experiencing an emergency
                            or feel that you are in immediate
                            danger, please seek urgent assistance.

                        </p>

                    </div>

                </section>


                <div className="emergency-notice">

                    <strong>
                        Please remember
                    </strong>

                    <p>

                        MindShare volunteers provide emotional
                        support, but they are not a replacement
                        for emergency services or specialized
                        emergency care.

                    </p>

                </div>


                <section className="emergency-section">

                    <h2>
                        Get Immediate Help
                    </h2>

                    <p className="section-description">

                        If you need urgent assistance, use one
                        of the emergency services below.

                    </p>


                    <div className="emergency-cards">

                        <div className="emergency-card">

                            <div className="card-icon">
                                🚨
                            </div>

                            <div className="card-content">

                                <h3>
                                    Police Emergency
                                </h3>

                                <p className="emergency-number">
                                    999 / 112 / 911
                                </p>

                                <p>

                                    For immediate police assistance
                                    and protection during an emergency.

                                </p>

                            </div>

                        </div>


                        <div className="emergency-card">

                            <div className="card-icon">
                                ❤️
                            </div>

                            <div className="card-content">

                                <h3>
                                    Kenya Red Cross
                                </h3>

                                <p className="emergency-number">
                                    0703 037 000
                                </p>

                                <p>

                                    Kenya Red Cross provides humanitarian
                                    and emergency response services.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                <section className="important-card">

                    <div className="important-icon">
                        i
                    </div>


                    <div>

                        <h2>
                            Important
                        </h2>

                        <p>

                            If your situation is life-threatening,
                            do not wait for a MindShare chat session.
                            Contact an emergency service immediately
                            or go to the nearest emergency facility.

                        </p>

                    </div>

                </section>


                <div className="emergency-actions">

                    <button
                        className="primary-emergency-button"
                        onClick={() => navigate("/user")}
                    >

                        Return to Dashboard

                    </button>

                </div>

            </main>

        </div>

    );

}


export default EmergencyHelp;
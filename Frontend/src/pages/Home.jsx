import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

    const navigate = useNavigate();


    return (

        <div className="home-page">

            {/* NAVIGATION */}

            <nav className="home-navbar">

                <div
                    className="home-brand"
                    onClick={() => navigate("/")}
                >

                    <div className="home-logo">

                        M

                    </div>

                    <div className="home-brand-text">

                        Mind<span>Share</span>

                    </div>

                </div>


                <div className="home-nav-links">

                    <button
                        onClick={() => navigate("/login")}
                    >
                        Sign In
                    </button>


                    <button
                        className="home-nav-register"
                        onClick={() => navigate("/register")}
                    >
                        Get Started
                    </button>

                </div>

            </nav>


            {/* HERO SECTION */}

            <section className="hero-section">

                <div className="hero-content">

                    <div className="hero-badge">

                        <span className="badge-dot"></span>

                        Mental health support through
                        human connection

                    </div>


                    <h1>

                        You deserve a place
                        <span> to be heard.</span>

                    </h1>


                    <p className="hero-description">

                        MindShare connects people seeking
                        mental health support with compassionate
                        volunteer professionals who are ready
                        to listen, support and help.

                    </p>


                    <div className="hero-buttons">

                        <button
                            className="primary-hero-button"
                            onClick={() => navigate("/register")}
                        >

                            Find Support

                            <span>→</span>

                        </button>


                        <button
                            className="secondary-hero-button"
                            onClick={() => navigate("/register")}
                        >

                            Volunteer With Us

                        </button>

                    </div>


                    <p className="hero-note">

                        A safe space to talk. A community
                        willing to listen.

                    </p>

                </div>


                <div className="hero-visual">

                    <div className="hero-circle"></div>


                    <div className="hero-card main-hero-card">

                        <div className="hero-card-icon">

                            💬

                        </div>


                        <div>

                            <strong>

                                Someone is listening.

                            </strong>


                            <p>

                                You don't have to
                                face everything alone.

                            </p>

                        </div>

                    </div>


                    <div className="hero-floating-card top-card">

                        <span>♥</span>

                        Compassion

                    </div>


                    <div className="hero-floating-card bottom-card">

                        <span>✓</span>

                        Human connection

                    </div>

                </div>

            </section>


            {/* INTRODUCTION */}

            <section className="intro-section">

                <div className="section-label">

                    WHAT IS MINDSHARE?

                </div>


                <h2>

                    Mental health support
                    should not be a privilege.

                </h2>


                <p>

                    Finding someone to talk to can be difficult.
                    Professional mental health support can also
                    be financially out of reach for many people.
                    MindShare was created to help bridge that gap.

                </p>


                <p>

                    Our platform creates a space where people
                    can request a conversation with a verified
                    volunteer mental health professional and
                    receive compassionate, human support.

                </p>

            </section>


            {/* HOW IT WORKS */}

            <section className="how-section">

                <div className="section-heading">

                    <div className="section-label">

                        HOW IT WORKS

                    </div>


                    <h2>

                        Getting support can be simple.

                    </h2>


                    <p>

                        MindShare is designed to make the
                        first step easier.

                    </p>

                </div>


                <div className="steps-grid">


                    <div className="step-card">

                        <div className="step-number">

                            01

                        </div>


                        <div className="step-icon">

                            👤

                        </div>


                        <h3>

                            Create an account

                        </h3>


                        <p>

                            Sign up for a MindShare account
                            and create a safe space where
                            you can access support.

                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">

                            02

                        </div>


                        <div className="step-icon">

                            🤝

                        </div>


                        <h3>

                            Request a session

                        </h3>


                        <p>

                            When you need someone to talk to,
                            request a conversation with an
                            available volunteer.

                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">

                            03

                        </div>


                        <div className="step-icon">

                            💬

                        </div>


                        <h3>

                            Start talking

                        </h3>


                        <p>

                            Connect through a private chat
                            session and have a conversation
                            at your own pace.

                        </p>

                    </div>

                </div>

            </section>


            {/* VOLUNTEER SECTION */}

            <section className="volunteer-section">

                <div className="volunteer-content">

                    <div className="section-label light-label">

                        FOR MENTAL HEALTH PROFESSIONALS

                    </div>


                    <h2>

                        Your time could mean
                        more than you know.

                    </h2>


                    <p>

                        There are people who simply need
                        someone willing to listen. If you are
                        a qualified mental health professional,
                        you can use your experience and
                        compassion to make that connection
                        possible.

                    </p>


                    <button
                        className="volunteer-button"
                        onClick={() => navigate("/register")}
                    >

                        Become a Volunteer

                        <span>→</span>

                    </button>

                </div>


                <div className="volunteer-visual">

                    <div className="quote-card">

                        <div className="quote-mark">

                            “

                        </div>


                        <p>

                            Sometimes the most
                            meaningful thing we can
                            give someone is our time.

                        </p>


                        <div className="quote-line"></div>


                        <span>

                            The MindShare Community

                        </span>

                    </div>

                </div>

            </section>


            {/* VALUES */}

            <section className="values-section">

                <div className="section-heading">

                    <div className="section-label">

                        WHAT MATTERS TO US

                    </div>


                    <h2>

                        Built around people,
                        not just technology.

                    </h2>

                </div>


                <div className="values-grid">

                    <div className="value-card">

                        <div className="value-icon">

                            🫶

                        </div>


                        <h3>

                            Compassion

                        </h3>


                        <p>

                            Every conversation begins with
                            empathy, respect and a willingness
                            to listen.

                        </p>

                    </div>


                    <div className="value-card">

                        <div className="value-icon">

                            🌍

                        </div>


                        <h3>

                            Accessibility

                        </h3>


                        <p>

                            We believe meaningful mental
                            health support should be easier
                            for people to reach.

                        </p>

                    </div>


                    <div className="value-card">

                        <div className="value-icon">

                            🔒

                        </div>


                        <h3>

                            Privacy

                        </h3>


                        <p>

                            Conversations on MindShare are
                            designed to provide users with
                            a private space to communicate.

                        </p>

                    </div>


                    <div className="value-card">

                        <div className="value-icon">

                            🤝

                        </div>


                        <h3>

                            Community

                        </h3>


                        <p>

                            We bring people together so that
                            nobody has to feel like they have
                            to carry everything alone.

                        </p>

                    </div>

                </div>

            </section>


            {/* ABOUT SECTION */}

            <section className="about-section">

                <div className="about-image-area">

                    <div className="about-decoration decoration-one"></div>

                    <div className="about-decoration decoration-two"></div>


                    <div className="about-message-card">

                        <div className="about-message-icon">

                            💙

                        </div>


                        <strong>

                            You matter.

                        </strong>


                        <p>

                            Your thoughts,
                            feelings and experiences
                            deserve to be heard.

                        </p>

                    </div>

                </div>


                <div className="about-content">

                    <div className="section-label">

                        ABOUT MINDSHARE

                    </div>


                    <h2>

                        Technology that creates
                        room for human connection.

                    </h2>


                    <p>

                        MindShare is a community-focused
                        mental health platform created around
                        one simple idea: sometimes people need
                        someone to talk to.

                    </p>


                    <p>

                        The platform allows users to request
                        conversations with volunteer mental
                        health professionals. Volunteers can
                        offer their time and professional
                        experience to people who may otherwise
                        struggle to access support.

                    </p>


                    <p>

                        MindShare is not intended to replace
                        professional clinical care or emergency
                        services. Instead, it provides a supportive
                        starting point — a place to connect,
                        talk and be heard.

                    </p>

                </div>

            </section>


            {/* CALL TO ACTION */}

            <section className="cta-section">

                <div className="cta-content">

                    <div className="cta-icon">

                        💙

                    </div>


                    <h2>

                        Sometimes, taking the first
                        step is the hardest part.

                    </h2>


                    <p>

                        Whenever you're ready,
                        MindShare is here to help
                        you take that step.

                    </p>


                    <div className="cta-buttons">

                        <button
                            className="cta-primary"
                            onClick={() => navigate("/register")}
                        >

                            Get Started

                        </button>


                        <button
                            className="cta-secondary"
                            onClick={() => navigate("/login")}
                        >

                            Sign In

                        </button>

                    </div>

                </div>

            </section>


            {/* FOOTER */}

            <footer className="home-footer">

                <div className="footer-main">

                    <div className="footer-brand">

                        <div className="footer-logo">

                            M

                        </div>


                        <div>

                            <div className="footer-brand-name">

                                Mind<span>Share</span>

                            </div>


                            <p>

                                A safe space to connect,
                                talk and be heard.

                            </p>

                        </div>

                    </div>


                    <div className="footer-links">

                        <div>

                            <h4>

                                MindShare

                            </h4>


                            <button
                                onClick={() => navigate("/")}
                            >

                                Home

                            </button>


                            <button
                                onClick={() => navigate("/login")}
                            >

                                Sign In

                            </button>


                            <button
                                onClick={() => navigate("/register")}
                            >

                                Create Account

                            </button>

                        </div>


                        <div>

                            <h4>

                                Community

                            </h4>


                            <button
                                onClick={() => navigate("/register")}
                            >

                                Find Support

                            </button>


                            <button
                                onClick={() => navigate("/register")}
                            >

                                Volunteer With Us

                            </button>

                        </div>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>

                        © 2026 MindShare. Built with
                        compassion.

                    </span>


                    <span>

                        Mental health support through
                        human connection.

                    </span>

                </div>

            </footer>

        </div>

    );

}


export default Home;
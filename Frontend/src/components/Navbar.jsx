import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
        localStorage.removeItem("userId");

        navigate("/login");

    };

    return (

        <nav className="navbar">

            <div
                className="navbar-logo"
                onClick={() => {

                    if (role === "user") {

                        navigate("/user");

                    }

                    else if (role === "volunteer") {

                        navigate("/volunteer");

                    }

                    else {

                        navigate("/");

                    }

                }}
            >

                <div className="logo-mark">
                    M
                </div>

                <div className="logo-text">
                    Mind<span>Share</span>
                </div>

            </div>


            <div className="navbar-links">

                {role === "user" && (

                    <>
                        <button
                            className="nav-link"
                            onClick={() => navigate("/user")}
                        >
                            Dashboard
                        </button>

                        <button
                            className="nav-link"
                            onClick={() => navigate("/chat-history")}
                        >
                            Chat History
                        </button>

                        <button
                            className="nav-link emergency-link"
                            onClick={() => navigate("/emergency")}
                        >
                            Emergency
                        </button>

                        <button
    className="nav-link"
    onClick={() => navigate("/profile")}
>
    Profile
</button>
                    </>

                )}


                {role === "volunteer" && (

                    <>
                        <button
                            className="nav-link"
                            onClick={() => navigate("/volunteer")}
                        >
                            Dashboard
                        </button>

                        <button
                            className="nav-link"
                            onClick={() => navigate("/requests")}
                        >
                            Available Requests
                        </button>

                        <button
                            className="nav-link"
                            onClick={() => navigate("/accepted-requests")}
                        >
                            My Sessions
                        </button>

                        <button
                            className="nav-link"
                            onClick={() => navigate("/chat-history")}
                        >
                            Chat History
                        </button>
                        <button
    className="nav-link"
    onClick={() => navigate("/volunteer-profile")}
>
    Profile
</button>
                    </>

                )}

            </div>


            <div className="navbar-account">

                <div className="user-avatar">

                    {username
                        ? username.charAt(0).toUpperCase()
                        : "M"}

                </div>

                <span className="navbar-username">

                    {username || "MindShare User"}

                </span>


                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;
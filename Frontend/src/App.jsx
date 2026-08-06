import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import WaitingRoom from "./pages/WaitingRoom";
import Requests from "./pages/Requests";
import AcceptedRequests from "./pages/AcceptedRequests";
import ChatRoom from "./pages/ChatRoom";
import ChatHistory from "./pages/ChatHistory";
import PreviousChat from "./pages/PreviousChat";
import EmergencyHelp from "./pages/EmergencyHelp";
import UserProfile from "./pages/UserProfile";
import VolunteerProfile from "./pages/VolunteerProfile";

import {
    Routes,
    Route
} from "react-router-dom";


function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Home />}
            />


            <Route
                path="/login"
                element={<Login />}
            />


            <Route
                path="/register"
                element={<Register />}
            />


            <Route
                path="/user"
                element={

                    <ProtectedRoute role="user">

                        <UserDashboard />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/waiting-room"
                element={

                    <ProtectedRoute role="user">

                        <WaitingRoom />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/emergency"
                element={

                    <ProtectedRoute role="user">

                        <EmergencyHelp />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/emergency-help"
                element={

                    <ProtectedRoute role="user">

                        <EmergencyHelp />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/volunteer"
                element={

                    <ProtectedRoute role="volunteer">

                        <VolunteerDashboard />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/requests"
                element={

                    <ProtectedRoute role="volunteer">

                        <Requests />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/accepted-requests"
                element={

                    <ProtectedRoute role="volunteer">

                        <AcceptedRequests />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/chat-room/:sessionId"
                element={

                    <ProtectedRoute>

                        <ChatRoom />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/chat-history"
                element={

                    <ProtectedRoute>

                        <ChatHistory />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/chat-history/:sessionId"
                element={

                    <ProtectedRoute>

                        <PreviousChat />

                    </ProtectedRoute>

                }
            />


            <Route
                path="/profile"
                element={

                    <ProtectedRoute role="user">

                        <UserProfile />

                    </ProtectedRoute>

                }
            />

            <Route
    path="/volunteer-profile"
    element={

        <ProtectedRoute role="volunteer">

            <VolunteerProfile />

        </ProtectedRoute>

    }
/>

        </Routes>

    );

}


export default App;
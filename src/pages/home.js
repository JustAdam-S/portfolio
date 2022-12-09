import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Treatment from "../pages/Treatment";
import Medicalteam from "../pages/Medicalteam";
import Profile from "../pages/Profile";
import HospitalInfo from "../pages/HospitalInfo";
import Avatar from "../components/Avatar"
const Home = () => {
    return (
       <>
       <Router>
        <header>
            <nav>
                <ul>
                <li>
                    <Link to="/">Profile</Link>
                </li>
                <li>
                    <Link to="/medicalteam">Medical Team</Link>
                </li>
                <li>
                    <Link to="/hospitalinfo">Hospital Information</Link>
                </li>
                <li>
                    <Link to=""><i className="fa-solid fa-right-from-bracket"></i> </Link>
                </li>
               </ul>
            </nav>
        </header>
        <main className="profile">
            <Avatar />
            <Routes>
                <Route path="/" element={ <Profile/> } />
                <Route path="/treatment" element={<Treatment/>} />
                <Route path="/medicalteam" element={<Medicalteam/>} />
                <Route path="/hospitalinfo" element={<HospitalInfo/>} />
            </Routes>

        </main>
       </Router>
       </>
    )
}
export default Home;
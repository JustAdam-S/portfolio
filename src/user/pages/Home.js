import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HospitalInfo from "./HospitalInfo";
import MedicalTeam from "./Medicalteam";
import Treatment from "./Treatment";
import Profile from "./Profile";


const Home = () => {
    return (
        <>
        <Router>
        <div className="user">
            This is the user home page. 
            <nav>
                <ul>
                    <li>Logout</li>
                    <li>Profile</li>
                    <li>Menu</li>
                </ul>
            </nav>
         
            <div className="button">
            <button>
                <Link to="/profile">Home</Link>
           
            </button>

            <button>
            <Link to="/team">Medical Team</Link>

            </button>

            <button>
            <Link to="/hospital">Hospital Information</Link>
            </button>

            <button>
            <Link to="/treatment">Treatment Information</Link>
            </button>
            <Routes>
                <Route path="/profile" element={ <Profile/>} />
                <Route path="/team" element={ <MedicalTeam/>} />
                <Route path="/hospital" element={ <HospitalInfo/>} />
                <Route path="/treatment" element={ <Treatment/>} />
            </Routes>
        </div>

        </div>
        </Router>
        </>
    )
}  
export default Home;
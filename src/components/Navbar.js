import 'bootstrap/dist/css/bootstrap.css';
import "../styles/App.css"
import "../styles/Reviews.css"
import "../styles/Schedule.css"
import "../styles/Programs.css"
import "../styles/ContactUs.css"
import "../styles/AfterSchool.css"
import "../styles/Tablet.css"
import "../styles/Mobile.css"


import {useNavigate} from "react-router-dom"
import {useState} from "react"
import MobileNav from "./MobileNav"




export default function Navbar(){
    let [showMobileNav, setShowMobileNav] = useState(false)
    let navigate = useNavigate()


    let openMobileNav = () =>{
        setShowMobileNav(prev => !prev)

        //Hides hamburger nav when slide out animation is playing
        if(!showMobileNav){
            document.getElementById("hamburger-nav").classList.add("hidden")

            setTimeout(() =>{
                document.getElementById("hamburger-nav").classList.remove("hidden")
            }, 1000)
        }
    }

    

    return(
        <div className="mynav">
            <div onClick={() => navigate("/")} className="icon nav-tab">NTA</div>
            {window.innerWidth <= 550 || window.innerHeight < 425? 
            // Mobile Navbar
            <div id="hamburger-nav" onClick={openMobileNav} className="hamburger-nav">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            :             
            <div className="nav-tab-container">
                <div onClick={() => navigate("/programs")} className="programs-tab nav-tab">Programs</div>
                {/* <div onClick={() => navigate("/specialoffers")} className="special-offers-tab nav-tab">Special Offers</div> */}
                <div onClick={() => navigate("/schedule")} className="schedule-tab nav-tab">Schedule</div>
                <div onClick={() => navigate("/afterschool")} className="afterschool-tab nav-tab">Afterschool</div>
                <div onClick={() => navigate("/reviews")} className="reviews-tab nav-tab">Reviews</div>
                <div onClick={() => navigate("/contactus")} className="contactus-tab nav-tab">Contact Us</div>
            </div>
            }

            {showMobileNav ? <MobileNav /> : null}
        </div>
    )
}
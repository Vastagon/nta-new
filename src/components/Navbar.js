import 'bootstrap/dist/css/bootstrap.css';
import "../styles/App.css"
import "../styles/Reviews.css"
import "../styles/Schedule.css"
import "../styles/Programs.css"
import "../styles/ContactUs.css"
import "../styles/AfterSchool.css"
import "../styles/Tablet.css"
import "../styles/Mobile.css"

import MobileNav from "./MobileNav"

import NTALogo from "../images/NTALogo2.webp"


export default function Navbar({clickScrollTo, setShowMobileNav, showMobileNav}){

    // useEffect(() =>{
    //     let appHeight = document.getElementById("app")?.offsetHeight
    // }, [])

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


///if home id is clicked then setShowMobileNav to false

    return(
        <div className="mynav">
            <img alt="Image not Found. Send help" onClick={() => clickScrollTo("root")} src={NTALogo} className="icon nav-tab" />

            {window.innerWidth <= 950 || window.innerHeight < 425? 
            // Mobile Navbar
            <div id="hamburger-nav" onClick={openMobileNav} className="hamburger-nav">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            :             
            <div className="nav-tab-container">
                <div onClick={() => {clickScrollTo("programsScroll")}} className="programs-tab nav-tab">Programs</div>
                <div onClick={() => {clickScrollTo("overviewScroll")}} className="overview-tab nav-tab">Overview</div>                
                <div onClick={() => {clickScrollTo("scheduleScroll")}} className="schedule-tab nav-tab">Schedule</div>
                <div onClick={() => {clickScrollTo("reviewsScroll")}} className="reviews-tab nav-tab">Reviews</div>
                <div onClick={() => {clickScrollTo("contactUsScroll")}} className="contactus-tab nav-tab">Contact Us</div>
            </div>
            }

            {showMobileNav ? <MobileNav clickScrollTo={clickScrollTo} /> : null}
        </div>
    )
}
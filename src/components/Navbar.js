import 'bootstrap/dist/css/bootstrap.css';
import "../styles/App.css"
import "../styles/Reviews.css"
import "../styles/Schedule.css"
import "../styles/Programs.css"
import "../styles/ContactUs.css"
import "../styles/AfterSchool.css"
import "../styles/Tablet.css"
import "../styles/Mobile.css"


import {useState} from "react"
import MobileNav from "./MobileNav"

import NTALogo from "../images/NTALogo2.webp"




export default function Navbar(){
    let [showMobileNav, setShowMobileNav] = useState(false)
    let appHeight = document.getElementById("app")?.offsetHeight

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

    function clickScrollTo(position){
        let element = document.getElementById(position)
        let temp = element.offsetTop - element.scrollTop

        ///Change amount of scroll if necessary
        if(position === "scheduleScroll") temp = temp - (appHeight/32)
        if(position === "programsScroll") temp = temp + (appHeight/100)
        if(position === "overviewScroll") temp = temp + (appHeight/50)
        if(position === "contactUsScroll") temp = temp - (appHeight/100)

        window.scrollTo(0, temp)
    }



    return(
        <div className="mynav">
            {/* <div onClick={() => navigate("/")} className="icon nav-tab">NTA</div> */}
            <img onClick={() => clickScrollTo("root")} src={NTALogo} className="icon nav-tab" />

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
                <div onClick={() => {clickScrollTo("overviewScroll")}} className="programs-tab nav-tab">Overview</div>                
                <div onClick={() => {clickScrollTo("scheduleScroll")}} className="schedule-tab nav-tab">Schedule</div>
                <div onClick={() => {clickScrollTo("reviewsScroll")}} className="reviews-tab nav-tab">Reviews</div>
                <div onClick={() => {clickScrollTo("contactUsScroll")}} className="contactus-tab nav-tab">Contact Us</div>
            </div>
            }

            {showMobileNav ? <MobileNav clickScrollTo={clickScrollTo} /> : null}
        </div>
    )
}
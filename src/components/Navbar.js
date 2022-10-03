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

import NTALogo from "../images/NTALogo.webp"
import { useEffect, useState } from 'react';


export default function Navbar({clickScrollTo, setShowMobileNav, showMobileNav}){
    const [isMobileDevice, setIsMobileDevice] = useState()

    useEffect(() =>{
        /* Storing user's device details in a variable*/
        let details = navigator.userAgent;

        /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
        let regexp = /android|iPhone|iphone|kindle|Ipad|ipad/i;

        /* Using test() method to search regexp in details
        it returns boolean value*/
        setIsMobileDevice(regexp.test(details))
        console.log(details)

        if (isMobileDevice) {
            console.log("This is a mobile device")
        } else {
            console.log("Not a mobile device")
        }
    }, [])        


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

//if (!isMobileDevice) show blank else show blank

    return(
        <div className="mynav">
            <img alt="NTA Taekwondo Logo" onClick={() => clickScrollTo("root")} src={NTALogo} className="icon nav-tab" />

            {(window.innerWidth <= 950 || window.innerHeight < 425) ? 
            // Mobile Navbar
            <div id="hamburger-nav" onClick={openMobileNav} className="hamburger-nav">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            :             
            <div className="nav-tab-container">
                <div onClick={() => {clickScrollTo("programsScroll")}} className="desktop-tab programs-tab nav-tab">Programs</div>
                <div onClick={() => {clickScrollTo("overviewScroll")}} className="desktop-tab overview-tab nav-tab">Overview</div>                
                <div onClick={() => {clickScrollTo("scheduleScroll")}} className="desktop-tab schedule-tab nav-tab">Schedule</div>
                <div onClick={() => {clickScrollTo("reviewsScroll")}} className="desktop-tab reviews-tab nav-tab">Reviews</div>
                <div onClick={() => {clickScrollTo("contactUsScroll")}} className="desktop-tab contactus-tab nav-tab">Contact Us</div>
            </div>
            }

            {showMobileNav ? <MobileNav clickScrollTo={clickScrollTo} /> : null}
        </div>
    )
}
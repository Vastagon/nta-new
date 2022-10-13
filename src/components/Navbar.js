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
    const [innerSizes, setInnerSizes] = useState({height: window.innerHeight, width: window.innerWidth})

    useEffect(() =>{
        ///Adding event listener for resizing
        window.addEventListener("resize", () =>{
            setInnerSizes({height: window.innerHeight, width: window.innerWidth})
        })
    }, [])        

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


    if(!innerSizes) return null

    return(
        <div className="mynav">
            <img alt="NTA Taekwondo Logo" onClick={() => clickScrollTo("root")} src={NTALogo} className="icon nav-tab" />

            {(innerSizes.width <= 950 || innerSizes.height < 425) ? 
            // Mobile Navbar
            <div id="hamburger-nav" onClick={openMobileNav} className="hamburger-nav">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            :             
            <div className="nav-tab-container">
                <div onClick={() => {clickScrollTo("overviewScroll")}} className="desktop-tab overview-tab nav-tab">Overview</div>                
                <div onClick={() => {clickScrollTo("programsScroll")}} className="desktop-tab programs-tab nav-tab">Programs</div>
                <div onClick={() => {clickScrollTo("scheduleScroll")}} className="desktop-tab schedule-tab nav-tab">Schedule</div>
                <div onClick={() => {clickScrollTo("reviewsScroll")}} className="desktop-tab reviews-tab nav-tab">Reviews</div>
                <div onClick={() => {clickScrollTo("contactUsScroll")}} className="desktop-tab contactus-tab nav-tab">Contact Us</div>
            </div>
            }

            {showMobileNav ? <MobileNav clickScrollTo={clickScrollTo} /> : null}
        </div>
    )
}
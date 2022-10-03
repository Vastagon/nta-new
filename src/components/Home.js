import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import WebsiteNavbar from "./Navbar";
import AfterSchool from "./AfterSchool"
import HomeBottomNav from "./HomeBottomNav";
import Programs from "./Programs"
import Schedule from "./Schedule"
import Reviews from "./Reviews"
import ContactUs from "./ContactUs"
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

export default function Home(){
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [showBottomNav, setShowBottomNav] = useState(false)


    useEffect(() =>{
        ///Adds click event listeners so mobile nav can exit when click outside of
        document.querySelectorAll(".nav-close").forEach((checkedElements) =>{
            console.log("CLICKED")
            if(!checkedElements.classList.contains("home")){
                checkedElements.addEventListener("click", ()=>{
                    if(showMobileNav){
                        setShowMobileNav(false)
                    }
                    if(showBottomNav){
                        setShowBottomNav(false)
                    }
                })                  
            }
        })

    }, [])
    

    function clickScrollTo(position){
        let element = document.getElementById(position)
        let temp = element.offsetTop - element.scrollTop

        ///Change amount of scroll if necessary
        // if(position === "scheduleScroll") temp = temp - (appHeight/32)
        // if(position === "programsScroll") temp = temp + (appHeight/100)
        // if(position === "overviewScroll") temp = temp + (appHeight/50)
        // if(position === "contactUsScroll") temp = temp - (appHeight/100)
        if(position === "programsScroll"){
            temp = temp + 150
            if(window.innerWidth < 1450){
                temp = temp - 100
            }
        }
        
        if(position === "overviewScroll") temp = temp + 100
        if(position === "scheduleScroll") temp = temp - 180
        if(position === "contactUsScroll") temp = temp - 150

        window.scrollTo(0, temp)

        ///Remove mobile nav after click
        if(showMobileNav){
            setShowMobileNav(false)
        }
    }

    // if(isMobileDevice === null) return null

    return(
        <>
            <div className="home nav-close">
                <WebsiteNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} clickScrollTo={clickScrollTo} />

                <div id="everything-except-navbar">
                <HomeSlider />
{/* 
                <div className="home-container nav-close">
                    <h2 className="home-title">NTA Taekwondo</h2>
                    <p id="overviewScroll" className="home-content">The NTA Taekwondo Center has classes oriented for both children and adults. The 
                    energetic atmosphere of our programs and our personal approach to teaching are designed to give students the necessary tools to 
                    become better people through martial arts. Whether you are interested in Taekwondo as an exercise program or are a national-level 
                    athlete who wants to train for competition, NTA Taekwondo Center has classes to help meet your goals!</p>                
                </div> */}

                <div id="overviewScroll"></div>
                {/* The NTA Taekwondo Center has classes oriented for both children and adults. The energetic atmosphere of our programs 
                    and our personal approach to teaching are designed to give students the necessary tools to become better people through martial arts.  Whether you 
                    are interested in Taekwondo as an exercise program or are a national-level athlete who wants to train for competition, 
                    NTA Taekwondo Center has classes to help meet your goals! */}

                <AfterSchool />
                <Programs />
                <Schedule />
                <Reviews />
                <ContactUs />

                <HomeBottomNav showBottomNav={showBottomNav} setShowBottomNav={setShowBottomNav}/>
                <Footer clickScrollTo={clickScrollTo}/>
                </div>
            </div> 

        {showMobileNav ? <MobileNav clickScrollTo={clickScrollTo} /> : null}

        </>

    )
}
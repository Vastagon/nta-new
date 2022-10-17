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
import LoadingPage from "./LoadingPage";

import { useEffect, useState } from "react";

import crossTrainingImage from "../sliderImages/taekwondoCrosstraining.webp"
import bigBigImage from "../sliderImages/bigTaekwondoTraining.jpg"
import demoTeam from "../sliderImages/taekwondoDemoteam2.webp"


export default function Home(){
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [showBottomNav, setShowBottomNav] = useState(false)
    const [imageArray, setImageArray] = useState([crossTrainingImage, bigBigImage, demoTeam])
    const [showPage, setShowPage] = useState(false)

    ///Preload slider images
    useEffect(() =>{
        function preloadImages(srcs) {
            if (!preloadImages.cache) {
                preloadImages.cache = [];
            }
            var img;
            for (var i = 0; i < srcs.length; i++) {
                img = new Image();
                img.src = srcs[i];
                preloadImages.cache.push(img);
            }
            setShowPage(true)
        }
                
        preloadImages(imageArray);
    }, [])
 

    useEffect(() =>{
        document.querySelector("#everything-except-navbar")?.addEventListener("click", () =>{
            if(!showMobileNav){
                setShowMobileNav(false)
            }
        }) 

        document.querySelector("#everything-except-bottom-nav")?.addEventListener("click", () =>{
            if(!showBottomNav){
                setShowBottomNav(false)
            }
        })
        document.querySelector(".mynav")?.addEventListener("click", () =>{
            if(!showBottomNav){
                setShowBottomNav(false)
            }
        })
    }, [showPage])

    function clickScrollTo(position){
        let element = document.getElementById(position)
        let temp = element.offsetTop - element.scrollTop

        if(position === "programsScroll"){
            temp = temp + 175
            if(window.innerWidth < 1450){
                temp = temp - 100
            }
        }
        
        ///Position changes for scroll points
        if(position === "overviewScroll") temp = temp - 150
        if(position === "scheduleScroll") temp = temp - 180
        if(position === "contactUsScroll") temp = temp - 150
        if(position === "reviewsScroll") temp = temp - 50

        window.scrollTo(0, temp)

        ///Remove mobile nav after click
        if(showMobileNav){
            setShowMobileNav(false)
        }
    }

    

    if(!showPage){
        return <LoadingPage />
    }else{
    return( 
        <>
            <div className="home">
                <WebsiteNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} clickScrollTo={clickScrollTo} />

                <div id="everything-except-navbar">
                <div id="everything-except-bottom-nav">
                <HomeSlider imageArray={imageArray} />

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
                </div>

                <HomeBottomNav showBottomNav={showBottomNav} setShowBottomNav={setShowBottomNav}/>
                <Footer clickScrollTo={clickScrollTo}/>
                </div>
            </div> 

        {showMobileNav ? <MobileNav clickScrollTo={clickScrollTo} /> : null}
        </>
    )
    }
}
import { useEffect, useState } from "react";
import DesktopSchedule from "./DesktopSchedule";
import MobileSchedule from "./MobileSchedule";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Schedule(){
    const [screenWidth, setScreenWidth] = useState()
    const [screenHeight, setScreenHeight] = useState()

    useEffect(() =>{
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)


        window.addEventListener("resize", () =>{
            setScreenWidth(window.innerWidth)
            setScreenHeight(window.innerHeight)
        })
    }, [])


    if(!screenHeight || !screenWidth) return null

    return(

        <div className="schedule page">
            <Navbar />
            <h1 className="schedule-title">Schedule</h1>

            {screenWidth > screenHeight || (screenWidth < screenHeight && screenWidth < 575)?
                <MobileSchedule />
            :
                <DesktopSchedule />
            }

            <Footer />

        </div>

    )
}
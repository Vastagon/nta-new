import { useEffect, useState } from "react";
import DesktopSchedule from "./DesktopSchedule";
import MobileSchedule from "./MobileSchedule";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import "../styles/Schedule.css"


export default function Schedule(){
    const [screenWidth, setScreenWidth] = useState()
    useEffect(() =>{
        setScreenWidth(window.innerWidth)
    }, [])

    return(
        <div className="schedule page">
            <Navbar />
            <h1 className="schedule-title">Schedule</h1>

            {screenWidth > 800 ?
                <DesktopSchedule />
            :
                <MobileSchedule />
            }

            <Footer />

        </div>
    )
}
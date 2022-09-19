import { useEffect, useState } from "react";
import DesktopSchedule from "./DesktopSchedule";
import MobileSchedule from "./MobileSchedule";


export default function Schedule(){
    const [screenWidth, setScreenWidth] = useState()
    const [screenHeight, setScreenHeight] = useState()
    const [screenOrientation, setScreenOrientation] = useState()

    useEffect(() =>{
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
        setScreenOrientation(window?.screen?.orientation?.type)

        window.addEventListener("resize", () =>{
            setScreenWidth(window.innerWidth)
            setScreenHeight(window.innerHeight)
        })
        window.addEventListener("change", () =>{
            setScreenOrientation(window?.screen?.orientation?.type)
            console.log("erer")
        })
    }, [])

    if(!screenHeight || !screenWidth || !screenOrientation) return null

    return(

        <div className="schedule page">
            <h1 className="schedule-title">Schedule</h1>

            {screenWidth < screenHeight || (screenOrientation === "landscape-primary" && screenWidth < 800)?
                <MobileSchedule />
            :
                <DesktopSchedule />
            }

            {/* <Footer /> */}

        </div>

    )
}
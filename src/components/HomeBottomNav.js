import anime from "animejs"
import { useEffect } from "react"
import { useState } from "react"


export default function HomeBottomNav(){
    const [showBottomNav, setShowBottomNav] = useState(false)

    function toggleBottomNav(){
        setShowBottomNav(prev => !prev)
    }
    
    // useEffect(() =>{
    //     if(!showBottomNav){
    //         setTimeout(() =>{

    //         }, 500)
    //     }
    // }, [showBottomNav])
    
    return(
        <>
            {showBottomNav ? 
            <>
            {/* While open */}
            <div className="open-bottom-nav bottom-nav">
                <div className="show-hover" onClick={toggleBottomNav} style={{display: "flex"}}>
                    <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                    {/* <img className="bottom-nav-arrow" /> */}
                </div>
            </div>
                <form className="bottom-nav-form">
                    <label for="bottom-nav-form-name">Name</label>
                    <input id="bottom-nav-form-name" name="bottom-nav-form-name" />
                        <br></br>
                    <label for="bottom-nav-form-email">Email</label>
                    <input id="bottom-nav-form-email" name="bottom-nav-form-email" />
                        <br></br>
                    <label for="bottom-nav-form-phone">Phone Number</label>
                    <input id="bottom-nav-form-phone" name="bottom-nav-form-phone" />
                </form>      
            </>
            :
            // While Closed
            <div onClick={toggleBottomNav} className="show-hover bottom-nav">
                <div style={{display: "flex"}}>
                    <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                    {/* <img className="bottom-nav-arrow" /> */}
                </div>
            </div>
            }  


        </>



    )
}
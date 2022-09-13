import {useNavigate} from "react-router-dom"


export default function MobileNav(){
    let navigate = useNavigate()


    return(
        <div style={{height: "100vh"}} className="mobile-nav">
            <div onClick={() => navigate("/programs")} className="mobile-nav-tab">Programs</div>
            {/* <div onClick={() => navigate("/specialoffers")} className="mobile-nav-tab">Special Offers</div> */}
            <div onClick={() => navigate("/schedule")} className="mobile-nav-tab">Schedule</div>
            {/* <div onClick={() => navigate("/afterschool")} className="mobile-nav-tab">Afterschool</div> */}
            <div onClick={() => navigate("/reviews")} className="mobile-nav-tab">Reviews</div>
            <div onClick={() => navigate("/contactus")} className="mobile-nav-tab">Contact Us</div>
        </div>
    )
}
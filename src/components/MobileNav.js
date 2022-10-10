

export default function MobileNav({clickScrollTo}){



    return(
        <div className="mobile-nav">
            <div onClick={() => {clickScrollTo("overviewScroll")}} className="overview-tab nav-tab">Overview</div>                
            <div onClick={() => {clickScrollTo("programsScroll")}} className="programs-tab nav-tab">Programs</div>
            <div onClick={() => {clickScrollTo("scheduleScroll")}} className="schedule-tab nav-tab">Schedule</div>
            <div onClick={() => {clickScrollTo("reviewsScroll")}} className="reviews-tab nav-tab">Reviews</div>
            <div onClick={() => {clickScrollTo("contactUsScroll")}} className="contactus-tab nav-tab">Contact Us</div>
        </div>
    )
}
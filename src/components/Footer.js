export default function Footer({clickScrollTo}){

    return(
        <footer id="footer">
            <img alt="not found" className="footer-icon" src={require("../images/NTALogo2.webp")} />
            <div className="quick-links footer-segment">
                <h2>Quick Links</h2>

                <div onClick={() => {clickScrollTo("root")}}>Home</div>
                <div onClick={() => {clickScrollTo("overviewScroll")}}>Overview</div>
                <div onClick={() => {clickScrollTo("programsScroll")}}>Programs</div>
                <div onClick={() => {clickScrollTo("scheduleScroll")}}>Schedule</div>
                <div onClick={() => {clickScrollTo("reviewsScroll")}}>Reviews</div>
                <div onClick={() => {clickScrollTo("contactUsScroll")}}>Contact</div>
            </div>

            <div className='contactus-footer footer-segment'>
                <div className='contact-us-footer-grid'>
                    <h2>Contact Us</h2>
                    <div>3000 Grapevine Mills Pkwy, Grapevine, Texas</div>
                    <div>ntataekwondo@gmail.com</div>
                    <div>(972) 471-2333</div>
                    <img alt="not found" onClick={() => {window.open("https://www.facebook.com/groups/403731716464076", "_blank")}} className='facebook-icon' src="https://louisville.edu/english/images/facebookicon.png/image" />
                </div>
            </div>
        </footer>
    )
}

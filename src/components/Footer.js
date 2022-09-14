import {useNavigate} from "react-router-dom"

export default function Footer(){
    let navigate = useNavigate()

    return(
        <footer id="footer">
            <img alt="not found" className="footer-icon" src={require("../images/NTALogo2.webp")} />
            <div className="quick-links footer-segment">
                <h2>Quick Links</h2>

                <div onClick={() => navigate("/")}>Home</div>
                <div onClick={() => navigate("/programs")}>Programs</div>
                <div onClick={() => navigate("/schedule")}>Schedule</div>
                <div onClick={() => navigate("/reviews")}>Reviews</div>
                <div onClick={() => navigate("/contactus")}>Contact</div>
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

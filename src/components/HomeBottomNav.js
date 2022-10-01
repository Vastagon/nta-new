import { useState } from "react"
import * as emailjs from 'emailjs-com'
///variable that gets set to true after the first time bottom nav is clicked. That changes what classes are chosen

export default function HomeBottomNav({showBottomNav, setShowBottomNav}){
    const [bottomFormSendingEmail, setBottomFormSendingEmail] = useState(false)
    const [bottomFormInfo, setBottomFormInfo] = useState()
    const [firstClickBoolean, setFirstClickBoolean] = useState(false)

    function updateFormInfo(e){
        setBottomFormInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function submitBottomForm(e){
        e.preventDefault()
        ///Uses emailjs to send email
        setBottomFormSendingEmail(true)
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, bottomFormInfo, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setBottomFormSendingEmail(false)
            alert("Message Sent")
            setBottomFormInfo({name: "", phone: "", email: ""})
            // changeFormCard()

        }, (err) => {
            console.log('FAILED...', err);
            setBottomFormSendingEmail(false)
            alert("Error, message not sent")
        });
    }


    function toggleBottomNav(){
        setShowBottomNav(prev => !prev)
        if(!firstClickBoolean){
            setFirstClickBoolean(true)
        }
    }
    console.log(firstClickBoolean)
    
    return(
        <>
            {showBottomNav ? 
            <>
            {/* While open */}
            <div className="open-bottom-nav bottom-nav">
                <div className="bottom-text-container" onClick={toggleBottomNav}>
                    <div className="show-hover" style={{display: "flex"}}>
                        <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                        {/* <img className="bottom-nav-arrow" /> */}
                    </div>     
                    <div className="turn-bottom-nav-arrow bottom-nav-arrow"></div>
                </div>
            </div>
                <form onSubmit={submitBottomForm} onChange={updateFormInfo} className="bottom-nav-form">
                    <label>Name</label>
                    <input id="bottom-nav-form-name" name="name" />
                    <label>Email</label>
                    <input id="bottom-nav-form-email" name="email" />
                    <label>Phone Number</label>
                    <input id="bottom-nav-form-phone" name="phone" />

                    <button type="submit">Submit</button>
                </form>      
            </>
            ://If false use no-bottom-nav-border
            // While Closed  no-bottom-nav-border
            <div onClick={toggleBottomNav} className={firstClickBoolean ? "slide-down-animation show-hover bottom-nav" : "show-hover bottom-nav"}>
                <div className={firstClickBoolean ? "no-bottom-border bottom-text-container" : "no-bottom-nav-border bottom-text-container"}>
                    <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                    {/* <img className="bottom-nav-arrow" /> */}
                    <div className={firstClickBoolean ? "turn-bottom-arrow-down bottom-nav-arrow" : "bottom-nav-arrow"}></div>
                </div>

            </div>
            }  

            {bottomFormSendingEmail ? 
            <div className="spinner-container">
                <div className="loading-spinner"></div>
                <div className="loading-text">Don't leave this page</div>
            </div>            
            :
            null
            }   
        </>



    )
}
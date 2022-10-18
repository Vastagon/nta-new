import { useState } from "react"
import * as emailjs from 'emailjs-com'
import Spinner from "./Spinner"
import FailedEmail from "./FailedEmail"
import AcceptedEmail from "./AcceptedEmail"


export default function HomeBottomNav({setShowAcceptedCard, showAcceptedCard, showFailedCard, setShowFailedCard, showBottomNav, setShowBottomNav}){
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
            setShowAcceptedCard(true)
            setBottomFormInfo({name: "", phone: "", email: ""})
        }, (err) => {
            console.log('FAILED...', err);
            setBottomFormSendingEmail(false)
            setShowFailedCard(true)
        });
    }


    function toggleBottomNav(){
        setShowBottomNav(prev => !prev)
        if(!firstClickBoolean){
            setFirstClickBoolean(true)
        }
    }

    
    return(
        <>
            {showBottomNav ? 
            <>
            {/* While open */}
            <div className="open-bottom-nav bottom-nav">
                <div className="bottom-text-container" onClick={!bottomFormSendingEmail ? toggleBottomNav : null}>
                    <div className="show-hover" style={{display: "flex"}}>
                        <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                    </div>     
                    <div className="turn-bottom-nav-arrow bottom-nav-arrow"></div>
                </div>
            </div>
            <form onSubmit={submitBottomForm} onChange={updateFormInfo} className="bottom-nav-form">
                <label>Name <span className="asterisk">*</span></label>
                <input placeholder="Required" required id="bottom-nav-form-name" name="name" />
                <label>Email <span className="asterisk">*</span></label>
                <input placeholder="Required" required id="bottom-nav-form-email" name="email" />
                <label>Phone Number</label>
                <input required id="bottom-nav-form-phone" name="phone" />

                <button className="bottom-form-submit-button" type="submit">Submit</button>
            </form>      
            </>
            :
            // While Closed
            <>
            <div onClick={!bottomFormSendingEmail ? toggleBottomNav : null} className={firstClickBoolean ? "slide-down-animation show-hover bottom-nav" : "show-hover bottom-nav"}>

                <div className={firstClickBoolean ? "no-bottom-border bottom-text-container" : "no-bottom-nav-border bottom-text-container"}>
                    <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                    <div className={firstClickBoolean ? "turn-bottom-arrow-down bottom-nav-arrow" : "bottom-nav-arrow"}></div>
                </div>

            </div>
                <form onSubmit={submitBottomForm} onChange={updateFormInfo} className={firstClickBoolean ? "closed-form bottom-nav-form" : "first-closed-form bottom-nav-form" }>
                    <label>Name <span className="asterisk">*</span></label>
                    <input placeholder="Required" required id="bottom-nav-form-name" name="name" />
                    <label>Email <span className="asterisk">*</span></label>
                    <input placeholder="Required" required id="bottom-nav-form-email" name="email" />
                    <label>Phone Number</label>
                    <input required id="bottom-nav-form-phone" name="phone" />

                    <button className="bottom-form-submit-button" type="submit">Submit</button>
                </form> 
            </>
            }  


            {
                bottomFormSendingEmail ? 
                    <Spinner />         
                :
                    null
            } 

            {
                showFailedCard ? 
                    <FailedEmail setShowFailedCard={setShowFailedCard}/>
                :
                    null
            }
            
            {
                showAcceptedCard ? 
                    <AcceptedEmail setShowAcceptedCard={setShowAcceptedCard}/>
                :
                    null
            }
        </>



    )
}
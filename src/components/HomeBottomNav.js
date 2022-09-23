import { useState } from "react"
import * as emailjs from 'emailjs-com'


export default function HomeBottomNav(){
    const [showBottomNav, setShowBottomNav] = useState(false)
    const [bottomFormSendingEmail, setBottomFormSendingEmail] = useState(false)
    const [bottomFormInfo, setBottomFormInfo] = useState()

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


    console.log(bottomFormInfo)
    function toggleBottomNav(){
        setShowBottomNav(prev => !prev)
    }

    
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
                <form onSubmit={submitBottomForm} onChange={updateFormInfo} className="bottom-nav-form">
                    <label for="bottom-nav-form-name">Name</label>
                    <input id="bottom-nav-form-name" name="name" />
                        <br></br>
                    <label for="bottom-nav-form-email">Email</label>
                    <input id="bottom-nav-form-email" name="email" />
                        <br></br>
                    <label for="bottom-nav-form-phone">Phone Number</label>
                    <input id="bottom-nav-form-phone" name="phone" />

                    <button type="submit">Submit</button>
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
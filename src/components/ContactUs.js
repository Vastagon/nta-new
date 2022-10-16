import { useState } from "react";
import * as emailjs from 'emailjs-com'
import Spinner from "./Spinner";


export default function ContactUs(){
    const [currentlySendingEmail, setCurrentlySendingEmail] = useState(false)
    const [formInput, setFormInput] = useState({})

    function sendEmail(e){
        e.preventDefault()
        ///Uses emailjs to send email
        setCurrentlySendingEmail(true)
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formInput, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setCurrentlySendingEmail(false)
            alert("Message Sent")
            setFormInput({name: "", phone: "", email: ""})
            ///Empty form inputs
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("phone").value = ""
        }, (err) => {
            console.log('FAILED...', err);
            setCurrentlySendingEmail(false)
            alert("Error, message not sent")
        });
    }
    ///Updates state component
    function updateForm(e){
        setFormInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <>
        <h3 style={{textAlign: "center"}}>Give us your Information</h3>
            <div className="contact-us nav-close">
                <div className='contactus-card'>
                    <div className='contact-info'>
                        <h4>Contact Us</h4>
                        <div>3000 Grapevine Mills Pkwy, Grapevine, Texas</div>
                        <div>ntataekwondo@gmail.com</div>
                        <div>(972) 471-2333</div>
                    </div>


                    <form onSubmit={sendEmail} className="contact-us-form">
                        <label>Name <span className="asterisk">*</span></label>
                        <input id="name" onChange={updateForm} name="name" type="text" />

                        <label>Email <span className="asterisk">*</span></label>
                        <input id="email" onChange={updateForm} name="email" type="text" />

                        <label>Phone</label>
                        <input id="phone" onChange={updateForm} name="phone" type="text" />

                        <button type="submit">Submit</button>
                    </form>
                </div>

                {currentlySendingEmail ? 
                    <Spinner />            
                :
                null
                }   
            </div>

            <div id="map">
                <iframe title="map" className="contactus-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.3640211944444!2d-97.04233204873952!3d32.96779658144565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2c0a6b0e1275%3A0x6a2f91f9df9415a2!2sNTA%20Taekwondo!5e0!3m2!1sen!2sus!4v1653548791280!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
            </div>
        </>
    )
}
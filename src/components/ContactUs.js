import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import * as emailjs from 'emailjs-com'
import Footer from "./Footer";

import {
    Form,
    Label,
    Input,
    FormGroup,
    Button,
} from "reactstrap"


export default function ContactUs(){
    const [currentlySendingEmail, setCurrentlySendingEmail] = useState(false)
    const [formInput, setFormInput] = useState({})

    const [formCard, setFormCard] = useState(
        <Form onSubmit={sendEmail} className="contact-form" style={{borderRadius: "10px", borderWidth: "1px", borderStyle: "solid", padding: "1rem"}}>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input 
                type= "text"
                name="name"
                onChange={updateForm}
                value={formInput.name}
                required
                placeholder="Name"
            />

            <Label for="phone">Phone Number</Label>
            <Input 
                type= "phone"
                name= "phone"
                onChange={updateForm}
                value={formInput.phone}
                required
                placeholder="Phone Number"
            />

            <Label for="email">Email</Label>
            <Input 
                type= "email"
                name="email"
                onChange={updateForm}
                value={formInput.email}
                required
                placeholder="Email"
            />
        </FormGroup>

        <Button>Submit</Button>
    </Form>
    )


    useEffect(() =>{
        changeFormCard()
    }, [formInput])

    function changeFormCard(){
        setFormCard(
            <Form onSubmit={sendEmail} className="contact-form" style={{borderRadius: "10px", borderWidth: "1px", borderStyle: "solid", borderColor: "gray", padding: "1rem"}}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input 
                    type= "text"
                    name="name"
                    onChange={updateForm}
                    value={formInput.name}
                    required
                    placeholder="Name"
                    id="name"
                />

                <Label for="phone">Phone Number</Label>
                <Input 
                    type= "phone"
                    name= "phone"
                    onChange={updateForm}
                    value={formInput.phone}
                    required
                    placeholder="Phone Number"
                    id="number"
                />

                <Label for="email">Email</Label>
                <Input 
                    type= "email"
                    name="email"
                    onChange={updateForm}
                    value={formInput.email}
                    required
                    placeholder="Email"
                    id="email"
                />
            </FormGroup>

            <Button>Submit</Button>
            </Form>
        )
    }


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
            // changeFormCard()

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
        <Navbar />



        <div className="contact-us page">
            
            <div className='contactus-card'>
                <h4>Contact Us</h4>
                <div className='contact-info'>
                    <div>3000 Grapevine Mills Pkwy, Grapevine, Texas</div>
                    <div>ntataekwondo@gmail.com</div>
                    <div>(972) 471-2333</div>
                </div>
            </div>


            {formCard}


            {currentlySendingEmail ? 
            <div className="spinner-container">
                <div className="loading-spinner"></div>
                <div className="loading-text">Don't leave this page</div>
            </div>            
            :
            null
            }   
        </div>

        <div id="map">
            <iframe title="map" className="contactus-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.3640211944444!2d-97.04233204873952!3d32.96779658144565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2c0a6b0e1275%3A0x6a2f91f9df9415a2!2sNTA%20Taekwondo!5e0!3m2!1sen!2sus!4v1653548791280!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
        </div>

        <Footer />
        </>
    )
}
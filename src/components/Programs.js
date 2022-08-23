import Footer from "./Footer";
import Navbar from "./Navbar";

import {Card, CardImg, CardBody, CardTitle, CardText, CardGroup} from "reactstrap"


export default function Programs(){

    return(
        <>
            <Navbar />

            <h1 className="programs-header">Programs</h1>

            <div className="programs page">
            <CardGroup>
            <Card>
                <CardBody>
                    <CardImg 
                        alt="Card image cap"
                        src={require("../images/traditional-program.png")}
                    />
                    <CardTitle>Traditional Taekwondo</CardTitle>

                    <CardText>Traditional Taekwondo is one of the most systematic and scientific Korean traditional martial arts, that teaches 
                    more than physical fighting skills. It is a discipline that shows ways of enhancing our spirit and life through training our body 
                    and mind. Traditional Program provides one of the highest level curriculum that students of all ages find very challenging and fun. 
                    NTA Taekwondo offers one of the highest level World Class Team Programs.</CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardImg 
                        alt="Card image cap"
                        src={require("../images/olympictaekwondo.jpg")}
                    />
                    <CardTitle>Team Program</CardTitle>

                    <CardText>The Taekwondo team program is focused on the type sparring that is present in the Olympics.
                    It is for the students who want to compete in olympic-style sparring tournaments. Our sparring team competes in both local and
                    national tournaments, and have produced several state and national champions.</CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardImg 
                        alt="Card image cap"
                        src={require("../images/kidsTraining.jpg")}
                    />
                    <CardTitle>Children's Classes</CardTitle>

                    <CardText>Martial arts aren't all about punching and kicking. At NTA, we focus more on the personal-development aspects
                        that Taekwondo offers. Things like improving focus, instilling a sense of discipline, getting fit, 
                        and increasing confidence</CardText>
                </CardBody>
            </Card>
                </CardGroup>
            </div>   

            <Footer />     
        </>

    )
}
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Programs(){

    return(
        <>
            <Navbar />

            <h1 className="programs-header">Programs</h1>

            <div className="programs page">
                <div className="programs-card-container">
                    <div className="programs-card">
                        <img alt="Card image cap" src={require("../images/traditional-program.png")} />
                        <h4>Traditional Taekwondo</h4>
                        <p>Traditional Taekwondo is one of the most systematic and scientific Korean traditional martial arts, that teaches 
                        more than physical fighting skills. It is a discipline that shows ways of enhancing our spirit and life through training our body 
                        and mind. Traditional Program provides one of the highest level curriculum that students of all ages find very challenging and fun. 
                        NTA Taekwondo offers one of the highest level World Class Team Programs.</p>
                    </div>
                    <div className="programs-card">
                        <img alt="Card image cap" src={require("../images/olympictaekwondo.jpg")} />
                        <h4>Team Program</h4>
                        <p>The Taekwondo team program is focused on the type sparring that is present in the Olympics.
                        It is for the students who want to compete in olympic-style sparring tournaments. Our sparring team competes in both local and
                        national tournaments, and have produced several state and national champions.</p>

                    </div>
                    <div className="programs-card">
                        <img className="programs-last-image" alt="Card image cap" src={require("../images/kidsTraining.jpg")} />
                        <h4>Children's Classes</h4>
                        <p>Martial arts aren't all about punching and kicking. At NTA, we  also focus on the personal-development aspects
                        that Taekwondo offers. Things like improving focus, instilling a sense of discipline, getting fit, 
                        and increasing confidence.</p>
                    </div>
                </div>
            </div>   

            <Footer />     
        </>

    )
}
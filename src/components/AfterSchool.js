import Navbar from "./Navbar";
import Footer from "./Footer"

export default function AfterSchool(){
    return(
        <div className="after-school page">
            <Navbar />
            <div className="overview">
                <h2>Overview</h2>
                <p>Taekwondo is a traditional Korean martial art, which means “the way of kicking and punching”. In taekwondo, hands and feet can be 
                    used to overcome an opponent, but the trademark of the sport is its combination of kick movements.  Taekwondo is one of the two 
                    Asian martial arts included on the Olympic programme. Taekwondo made its debut as a demonstration Olympic sport at the 1988 Seoul 
                    Games, and became an official medal sport at the 2000 Sydney Games. NTA’s Olympic Program delivers a path to the Olympics.  
                    NTA has produced numerous regional, state and national champions.</p>
            </div>

            <div className="children-classes">
                <h2>Family Friendly</h2>

                {/* Image on the Right */}
                <div className="image-segment">
                    <div className="image-segment-text">
                        <h3>Fitness</h3>
                        <p>Taekwondo allows individuals to increase their overall fitness while performing a lot of different technniques and kicks.
                        It also starts off easy to allow everyone to attend and get more fit. With a slow pace in the beginning, you slowly build your stamina
                        until you're doing high repetition workouts without much problem. By that point, you'll have probably lost
                        some weight.</p>

                        <h3>Discipline</h3>
                        <p>In Taekwondo, students are taught the values and benefits of hard work and Discipline. No matter what aspect of Taekwondo
                        a student is learning, one of the things that they all require is discipline. Learning a number of different techniques, sparring with a teammate,
                        or learning forms all require a high degree of concentration. Students are sometimes surprised at how much faster they are able to focus their minds 
                        compared to when they started.</p>
                    </div>

                    <img className="right-image" src={require("../images/familyFriendly.jpg")} />
                </div>

                {/* Image on the left */}
                <div className="image-segment">
                    <img className="right-image" src={require("../images/olympictaekwondo.jpg")} />

                    <div className="image-segment-text">
                        {/* Needs Done */}
                        <h3>Stress Relief</h3>
                        <p>Taekwondo helps build mental toughness, teaches the value of hard work, and gives you the persistence you need in everyday life. Many members at 
                            House of Dragons have said that Taekwondo is also a great stress-relief from school or work because it helps take their mind off problems they are 
                            facing so they can focus all their thoughts into kicking the target in front of them. It is a workout where you have to have endurance to execute 
                            all the various kicks and punches until the end of class. By engaging your brain during class, Taekwondo can help provide a completely different 
                            workout that you won’t find anywhere else.</p>

                        {/* Needs Done */}
                        <h3>Self Defence</h3>
                        <p>In Taekwondo, students are taught how to help each other out in class. Whether that be to help hold boards to break or targets for you to kick 
                        even to being sparring partners. By creating a bond of trust and reciprocation, you and your sparring partner can then practice various kicking
                        combinations on each other and see how to make things work. Members at House of Dragons have become close friends and help
                        each other reach their goals.</p>
                    </div>
                </div>

                {/* Image on the Right */}
                <div className="image-segment">
                    <div className="image-segment-text">
                        {/* <h3>Fitness</h3>
                        <p>Taekwondo helps build mental toughness, teaches the value of hard work, and gives you the persistence you need in everyday life. Many members at 
                            House of Dragons have said that Taekwondo is also a great stress-relief from school or work because it helps take their mind off problems they are 
                            facing so they can focus all their thoughts into kicking the target in front of them. It is a workout where you have to have endurance to execute 
                            all the various kicks and punches until the end of class. By engaging your brain during class, Taekwondo can help provide a completely different 
                            workout that you won’t find anywhere else.</p> */}
                            
                        {/* Needs Done */}

                        <h3>Community</h3>
                        <p>In Taekwondo, students are taught how to help each other out in class. Whether that be to help hold boards to break or targets for you to kick 
                        even to being sparring partners. By creating a bond of trust and reciprocation, you and your sparring partner can then practice various kicking
                        combinations on each other and see how to make things work. Members at House of Dragons have become close friends and help
                        each other reach their goals.</p>
                    </div>

                    <img className="right-image" src={require("../images/smallFamilyFriendly.jpg")} />
                </div>

            </div>

            <Footer />
        </div>
    )
}
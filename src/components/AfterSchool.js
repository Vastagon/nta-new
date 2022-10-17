

export default function AfterSchool(){
    return(
        <div className="after-school nav-close">
            {/* <img src={require("../images/NTALogo.webp")} /> */}
            <div className="overview">
                <h2>Overview</h2>
                <p>The NTA Taekwondo Center has classes oriented for both children and adults. The energetic atmosphere of our programs and our 
                    personal approach to teaching are designed to give students the necessary tools to become better people through martial arts. 
                    Whether you are interested in Taekwondo as an exercise program or are a national-level athlete who wants to train for competition, 
                    NTA Taekwondo Center has classes to help meet your goals!</p>


                {/* Taekwondo is a traditional Korean martial art, which means “the way of kicking and punching”. In taekwondo, hands and feet can be 
                    used to overcome an opponent, but the trademark of the sport is its combination of kick movements.  Taekwondo is one of the two 
                    Asian martial arts included on the Olympic programme. Taekwondo made its debut as a demonstration Olympic sport at the 1988 Seoul 
                    Games, and became an official medal sport at the 2000 Sydney Games. NTA’s Olympic Program delivers a path to the Olympics.  
                    NTA has produced numerous regional, state and national champions. */}
            </div>

            <div className="afterschool-content">
                <h2>Family Friendly</h2>
                <div className="afterschool-underline"></div>

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
                    
                    <img alt="Taekwondo Family Friendly" className="right-image" src={require("../images/smallFamilyFriendly.jpg")} />
                </div>
                
                {/* Image on the left */}
                <div className="image-segment">
                    <img alt="Olympic Taekwondo Athlete" className="right-image" src={require("../images/olympictaekwondo.webp")} />

                    <div className="image-segment-text">
                        <h3>Stress Relief</h3>
                        <p>Working out has been scientifically proven to reduce an individual's stress. Being able to relieve this stress that
                        might get built up from school or work allows them to refresh their minds to be ready for the next day of school or the 
                        night of homework that may come afterwards. Being able to focus on the workout allows students to take their minds off off
                        school or whatever else might be troubling them.</p>

                        <h3>Self Defense</h3>
                        <p>The best form of self defense is learning how to avoid the fight. At NTA students learn how to assess situations
                        and prevent or de-escalate them before the problem even begins. Taekwondo helps to build muscle mass and physical endurance.
                        Learning about how the human body moves and understanding more about physical altercations allows students to learn how to best
                        avoid these situations, as well as help them to understand the dangers of these threatening situations.
                        </p>
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
                            

                        <h3>Community</h3>
                        <p >Communication and cooperation are key components taught in Taekwondo. Students learn how to help each other out
                        in multiple aspects: they learn how to explain techniques, how to hold boards and targets for their partners, and how
                        to spar while learning from it without injuries. Learning how to work with partners and building that trust in each other
                        lets both memebers work towards their goals together, letting everyone succeed.</p>
                        {/* Div for Scrolling */}
                        <div id="programsScroll"></div>
                    </div>
                    {/* smallFamilyFriendly.jpg */}
                    <img alt="Family Friendly TKD" className="right-image" src={require("../images/familyFriendly.jpg")} />
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    )
}
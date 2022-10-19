

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
            </div>

            {/* Card 1 */}
            <div className="after-school-card">
                <div className="left-card">
                    <h1>Fitness</h1>
                    <p>Taekwondo allows individuals to increase their overall fitness while performing a lot of different technniques and kicks.
                    It also starts off easy to allow everyone to attend and get more fit. With a slow pace in the beginning, you slowly build your stamina
                    until you're doing high repetition workouts without much problem. By that point, you'll have probably lost
                    some weight.</p>                    
                </div>
                <img alt="Taekwondo Family Friendly" className="temp-right-image" src={require("../images/smallFamilyFriendly.jpg")} />
            </div>

            {/* Card 2 */}
            <div className="after-school-card">
                <img alt="Taekwondo Family Friendly" className="temp-right-image" src={require("../images/sparring.jpg")} />
                <div className="left-card">
                    <h1>Discipline</h1>
                    <p>In Taekwondo, students are taught the values and benefits of hard work and Discipline. No matter what aspect of Taekwondo
                    a student is learning, one of the things that they all require is discipline. Learning a number of different techniques, sparring with a teammate,
                    or learning forms all require a high degree of concentration. Students are sometimes surprised at how much faster they are able to focus their minds 
                    compared to when they started.</p>                    
                </div>
            </div>

            {/* Card 3 */}
            <div className="after-school-card">
                <div className="left-card">
                    <h1>Stress Relief</h1>
                    <p>Working out has been scientifically proven to reduce an individual's stress. Being able to relieve this stress that
                    might get built up from school or work allows them to refresh their minds to be ready for the next day of school or the 
                    night of homework that may come afterwards. Being able to focus on the workout allows students to take their minds off off
                    school or whatever else might be troubling them.</p>                  
                </div>
                <img alt="Taekwondo Family Friendly" className="temp-right-image" src={require("../images/martial-arts-age.webp")} />
            </div>

            {/* Card 4 */}
            <div className="after-school-card">
                <img alt="Taekwondo Family Friendly" className="temp-right-image" src={require("../images/fallingkick.jpg")} />
                <div className="left-card">
                    <h1>Self Defense</h1>
                    <p>The best form of self defense is learning how to avoid the fight. At NTA students learn how to assess situations
                    and prevent or de-escalate them before the problem even begins. Taekwondo helps to build muscle mass and physical endurance.
                    Learning about how the human body moves and understanding more about physical altercations allows students to learn how to best
                    avoid these situations, as well as help them to understand the dangers of these threatening situations.</p>                  
                </div>
            </div>

            {/* Card 5 */}
            <div className="after-school-card">
                <div className="left-card">
                    <h1>Community</h1>
                    <p>Communication and cooperation are key components taught in Taekwondo. Students learn how to help each other out
                    in multiple aspects: they learn how to explain techniques, how to hold boards and targets for their partners, and how
                    to spar while learning from it without injuries. Learning how to work with partners and building that trust in each other
                    lets both memebers work towards their goals together, letting everyone succeed.</p>                  
                </div>
                <img alt="Taekwondo Family Friendly" className="temp-right-image" src={require("../images/handshake.jpg")} />
            </div>
            <div id="programsScroll" />


        </div>
    )
}
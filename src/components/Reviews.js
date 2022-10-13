import ReviewsCard from "./ReviewsCard";

export default function Reviews(){
    return(
        <div className="reviews nav-close">
            <h1 className="reviews-title">People Love our School</h1>

            <div className="reviews-container">
                <ReviewsCard 
                    reviewer="Lili Zoller"
                    content="Our kids have been in NTA for four years.   Studying takewkondo at NTA has been so beneficial for  my kid.  
                    All the masters are kind and dedicated to the art of taekwondo. 
                    I was so impressed that a year ago I started taking lessons and I love it!
                    The quality of the training is at such a high level that NTA has multiple athletes in the USA national team.  
                    We enjoy that NTA offers multiple class programs like traditional, competitive sparring, or hanmadang."
                />

                <ReviewsCard
                    reviewer="Eko Onggosanusi"
                    content="Those who want the best will train with the best.
                    NTA Taekwondo (Grapevine) has the best head coach money and time can find (Master Sang Cha...and many assistant coaches),  
                    the best facility, and world class athletes...yet in friendly and warm setting.
                    If you want to learn Taekwondo and live in the Metroplex, you owe yourself to check out this school. "
                />

                <ReviewsCard 
                    reviewer="Taisa Minto"
                    content="Great facility, coaches of high caliber and extensive experience, 
                    friendly growth environment for students and athletes, active and welcoming PTA.  
                    This is a school where kids and parents participate and growth together, either inside or outside of the studio."
                />

                <ReviewsCard
                    reviewer="Alan Romero"
                    content="My son Luca just started couple months ago. He’s only 4 and slightly inattentive sometimes. 
                    But the coaches do a fantastic job at teaching him and making it fun so he’s always excited in going to class."
                />

                <ReviewsCard
                    reviewer="Monica Mata"
                    content="Moved down from VA, and asked several head Taekwondo Masters where I should enroll my daughters for 
                    taekwondo/Dallas area. Without a  shatter of doubt, the response was consistent.  NTA Taekwondo- Master Sang H Cha.  2 years later, 
                    my oldest is a member of the National USA team and my youngest is following her lead. Thank you friends for the recommendation 
                    and thank you Master Cha/NTA for your commitment to our girls.  We certainly could not have accomplished this level of success without you."
                />
            </div>

            <div id="contactUsScroll"></div>
        </div>
    )
}

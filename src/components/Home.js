import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import WebsiteNavbar from "./Navbar";
import AfterSchool from "./AfterSchool"
import HomeBottomNav from "./HomeBottomNav";
import Programs from "./Programs"
import Schedule from "./Schedule"
import Reviews from "./Reviews"
import ContactUs from "./ContactUs"

export default function Home({imgs}){


    return(
        <div className="home page">
            <WebsiteNavbar imgs={imgs}/>
            
            <HomeSlider imgs={imgs}/>

            <div className="home-container">
                <h2 className="home-title">NTA Taekwondo</h2>
                <p id="overviewScroll" className="home-content">The NTA Taekwondo Center has classes oriented for both children and adults. The energetic atmosphere of our programs 
                and our personal approach to teaching are designed to give students the necessary tools to become better people through martial arts.  Whether you 
                are interested in Taekwondo as an exercise program or are a national-level athlete who wants to train for competition, 
                NTA Taekwondo Center has classes to help meet your goals!</p>                
            </div>



            <AfterSchool />
            <Programs imgs={imgs} />
            <Schedule />
            <Reviews />
            <ContactUs />

            {/* <HomeBottomNav /> */}
            <Footer />
        </div>
    )
}
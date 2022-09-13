import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import WebsiteNavbar from "./Navbar";
import AfterSchool from "./AfterSchool"
import HomeBottomNav from "./HomeBottomNav";

export default function Home(){


    return(
        <div className="home page">
            <WebsiteNavbar />
            
            <HomeSlider />

            {/* <img alt="not found" className="home-image" src={require('../images/crosstraining.jpg')} /> */}
            <h2 className="home-title">NTA Taekwondo</h2>
            <p className="home-content">The NTA Taekwondo Center has classes oriented for both children and adults. The energetic atmosphere of our programs 
            and our personal approach to teaching are designed to give students the necessary tools to become better people through martial arts.  Whether you 
            are interested in Taekwondo as an exercise program or are a national-level athlete who wants to train for competition, 
            NTA Taekwondo Center has classes to help meet your goals!</p>

            {/* <div className="features">
                <h2>Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> */}

            <AfterSchool />
         

            {/* <HomeBottomNav /> */}
            <Footer />
        </div>
    )
}
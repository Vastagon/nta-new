import Home from './components/Home';
import Programs from "./components/Programs"
import ErrorPage from './components/ErrorPage';
import SpecialOffers from "./components/SpecialOffers"
import Schedule from "./components/Schedule"
import AfterSchool from "./components/AfterSchool"
import Reviews from "./components/Reviews"
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';

import crossTrainingImage from "./sliderImages/crosstraining.webp"
import bigBigImage from "./sliderImages/bigbig.jpg"
import demoTeam from "./sliderImages/demoteam.jpeg"
import kidsTraining from "./images/kidsTraining.webp"
import olympictaekwondo from "./images/olympictaekwondo.webp"
import NTALogo from "./images/NTALogo2.webp"
import TraditionalTaekwondo from "./images/traditional-program.webp"

function App() {

  useEffect(() =>{
    const imgs = [
      crossTrainingImage,
      bigBigImage,
      demoTeam,
      kidsTraining,
      olympictaekwondo,
      NTALogo,
      TraditionalTaekwondo,
      "https://louisville.edu/english/images/facebookicon.png/image"
    ]

    cacheImages(imgs)
  }, [])

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) =>{
      return new Promise(function (resolve, reject) {
        const img = new Image()

        img.src = src
        img.onload = resolve()
        img.onerror = reject()
      })      
    })

    await Promise.all(promises)
  }


  return (
    <div className="App">
      <Router>
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/specialoffers" element={<SpecialOffers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/afterschool" element={<AfterSchool />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contactus" element={<ContactUs />} />

          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </ScrollToTop>
      </Router>
      

    </div>
  );
}

export default App;

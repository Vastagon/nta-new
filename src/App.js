import Home from './components/Home';
// import Programs from "./components/Programs"
// import ErrorPage from './components/ErrorPage';
// import SpecialOffers from "./components/SpecialOffers"
// import Schedule from "./components/Schedule"
// import AfterSchool from "./components/AfterSchool"
// import Reviews from "./components/Reviews"
// import ContactUs from './components/ContactUs';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
// import ScrollToTop from './components/ScrollToTop';
import { useEffect, useState } from 'react';

import crossTrainingImage from "./sliderImages/crosstraining.webp"
import bigBigImage from "./sliderImages/bigbig.jpg"
import demoTeam from "./sliderImages/demoteam.jpeg"
import kidsTraining from "./images/kidsTraining.webp"
import olympicTaekwondo from "./images/olympictaekwondo.webp"
import NTALogo from "./images/NTALogo2.webp"
import traditionalTaekwondo from "./images/traditional-program.webp"

function App() {
  const [imgs, setImgs] = useState();

  useEffect(() =>{
    setImgs(
      {
        crossTrainingImage: crossTrainingImage,
        bigBigImage: bigBigImage,
        demoTeam: demoTeam,
        kidsTraining: kidsTraining,
        olympicTaekwondo: olympicTaekwondo,
        NTALogo: NTALogo,
        traditionalTaekwondo: traditionalTaekwondo,
        facebookIcon: "https://louisville.edu/english/images/facebookicon.png/image"
      }
    )

    cacheImages(imgs)
  }, [])

  const cacheImages = async (srcArray) => {
    const promises = await srcArray?.map((src) =>{
      return new Promise(function (resolve, reject) {
        const img = new Image()

        img.src = src
        img.onload = resolve()
        img.onerror = reject()
      })      
    })

    await Promise.all(promises)
  }

  if(!imgs) return null
 
  return (
    <div id="app" className="App">
      {/* <Router>
        <ScrollToTop>
        <Routes>
          <Route path="*" element={<Home imgs={imgs} />} />

          
          <Route path="/programs" element={<Programs imgs={imgs} />} />
          <Route path="/specialoffers" element={<SpecialOffers imgs={imgs} />} />
          <Route path="/schedule" element={<Schedule imgs={imgs} />} />
          <Route path="/afterschool" element={<AfterSchool imgs={imgs} />} />
          <Route path="/reviews" element={<Reviews imgs={imgs} />} />
          <Route path="/contactus" element={<ContactUs imgs={imgs} />} />

          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </ScrollToTop>
      </Router> */}

      <Home imgs={imgs} />
      

    </div>
  );
}

export default App;

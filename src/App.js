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

function App() {
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

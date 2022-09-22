import Home from './components/Home';
import './styles/App.css';


function App() {
 
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

      <Home />
      

    </div>
  );
}

export default App;

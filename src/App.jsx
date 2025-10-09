import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Vaccinations from './pages/Vaccinations';
import FathersRole from './pages/FathersRole';
import Shop from './pages/Shop';
import ChildGrowth from './pages/ChildGrowth';
import Hospitals from './pages/Hospitals';
import Nutrition from './pages/Nutrition';
import Premium from './pages/Premium';
import Community from './pages/Community';
import './App.css';
import ElderlyAdvice from './components/ElderlyAdvice';
import Monitoring from './pages/Monitoring';
// import Pregnancy from './pages/Pregnancy';


function App() {
  return (
    
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/vaccinations" element={<Vaccinations />} />
            <Route path="/fathers-role" element={<FathersRole />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/child-growth" element={<ChildGrowth />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/community" element={<Community />} />
            <Route path='/elderlyadvice' element={<ElderlyAdvice/>} />
            <Route path='/monitoring' element={<Monitoring/>} />
            {/* <Route path='/pregnancy' element={<Pregnancy/>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schemes from './pages/GovernmentSchemes';
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
import PregnancyGuide from './pages/PregnancyGuide';
import BabysittingPage from './pages/BabysittingPage';
// import Pregnancy from './pages/Pregnancy';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import SettingsLayout from './pages/Settings/SettingsLayout';
import ProfileInfo from './pages/Settings/ProfileInfo';
import PremiumMembership from './pages/Settings/PremiumMembership';
// import HelpSupport from './pages/Settings/HelpSupport';
import About from './pages/Settings/About';
// Options page will be created under settings
import Options from './pages/Settings/Options';


function App() {
  return (
    
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/settings" element={<SettingsLayout />}>
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<ProfileInfo />} />
              <Route path="premium" element={<PremiumMembership />} />
              <Route path="options" element={<Options />} />
              {/* <Route path="help" element={<HelpSupport />} /> */}
              <Route path="about" element={<About />} />
            </Route>
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
            <Route path="/pregnancy-guide" element={<PregnancyGuide />} />
            <Route path="/babysittingpage" element={<BabysittingPage />} />

            {/* <Route path='/pregnancy' element={<Pregnancy/>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
}

export default App;
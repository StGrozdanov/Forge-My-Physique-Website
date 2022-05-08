import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Countdown from './components/Countdown/Countdown';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import Features from './components/Features/Features'

import { calculateTargetDate } from './helpers/calculateTargetDate'
import { Routes, Route } from 'react-router-dom';

const APP_RELEASE_AFTER_DAYS = 32;

function App() {
  const date = calculateTargetDate(APP_RELEASE_AFTER_DAYS);

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Details />
              <Countdown targetDate={date} />
              <Gallery />
            </>
          }
        />
        <Route path='/features' element={<Features />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
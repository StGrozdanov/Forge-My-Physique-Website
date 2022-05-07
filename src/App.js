import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Countdown from './components/Countdown/Countdown';
import { calculateTargetDate } from './helpers/calculateTargetDate'
import Gallery from './components/Gallery/Gallery';

const APP_RELEASE_AFTER_DAYS = 31;

function App() {
  const date = calculateTargetDate(APP_RELEASE_AFTER_DAYS);

  return (
    <>
      <Navigation />
      <Header />
      <Features />
      <Countdown targetDate={date} />
      <Gallery />
    </>
  );
}

export default App;
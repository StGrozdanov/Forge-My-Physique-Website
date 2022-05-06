import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Countdown from './components/Countdown/Countdown';
import { calculateTargetDate } from './helpers/calculateTargetDate'

const APP_RELEASE_AFTER_DAYS = 2;

function App() {
  const date = calculateTargetDate(APP_RELEASE_AFTER_DAYS);

  return (
    <>
      <Navigation />
      <Header />
      <Features />
      <Countdown targetDate={date} />
    </>
  );
}

export default App;
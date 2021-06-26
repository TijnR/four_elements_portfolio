import './App.css';
import { Route } from 'react-router-dom'

import Home from './pages/Home';
import Tijn from './pages/Tijn';
import Barry from './pages/Barry';
import Kim from './pages/Kim';
import Justin from './pages/Justin';
import ScrollToTop from './ScrollToTop';
import VisualIdentity from './pages/VisualIdentity';
import HandLettering from './pages/HandLettering';
import AbstractBackgroundAnimation from './pages/AbstractBackgroundAnimation';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Route exact path="/" component={Home} />
      <Route exact path="/tijn" component={Tijn} />
      <Route exact path="/barry" component={Barry} />
      <Route exact path="/kim" component={Kim} />
      <Route exact path="/kim/visual-identity" component={VisualIdentity} />
      <Route exact path="/kim/hand-lettering" component={HandLettering} />
      <Route exact path="/kim/abstract-background-animation" component={AbstractBackgroundAnimation} />
      <Route exact path="/justin" component={Justin} />
    
    </div>
  );
}

export default App;

import './App.css';
import { Route } from 'react-router-dom'

import Home from './pages/Home';
import Tijn from './pages/Tijn';
import Barry from './pages/Barry';
import Kim from './pages/Kim';
import Justin from './pages/Justin';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/tijn" component={Tijn} />
      <Route exact path="/barry" component={Barry} />
      <Route exact path="/kim" component={Kim} />
      <Route exact path="/justin" component={Justin} />
    
    </div>
  );
}

export default App;

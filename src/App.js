import './App.css';
import { Route } from 'react-router-dom'

import Home from './Pages/Home';
import Tijn from './Pages/Tijn';
import Barry from './Pages/Barry';
import Kim from './Pages/Kim';
import Justin from './Pages/Justin';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/Tijn" component={Tijn} />
      <Route exact path="/Barry" component={Barry} />
      <Route exact path="/Kim" component={Kim} />
      <Route exact path="/Justin" component={Justin} />
    
    </div>
  );
}

export default App;

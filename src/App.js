import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/landing'
import About from './components/About/about.js'
import Modules from './components/Modules/modules.js'

import AOS from 'aos'
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Modules />
    </div>
  );
}

export default App;

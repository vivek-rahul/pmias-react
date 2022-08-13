import './App.css';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import About from "./Containers/About";
import Service from "./Containers/Service";
import Contact from "./Containers/Contact";
import Home from "./Containers/Home";
import Gallery from "./Containers/Gallery";
import Signup from "./Components/Signup";

function App() {
  return (

      <BrowserRouter>
        <div>
    <Navbar/>
          <Switch>
              <Route path="/home" component={ Home } />
              <Route path="/about" component={ About  }/>
              <Route path="/services" component={ Service }/>
              <Route path="/gallery" component={ Gallery } />
              <Route path="/contact" component={ Contact }/>
              <Route path="/register" component={ Signup } />
          </Switch>
        </div>
      <Footer/>
      </BrowserRouter>

  );
}

export default App;

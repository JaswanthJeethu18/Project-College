
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      <Footer />
      </Router>
    </div>
       

    );
  }

export default App;

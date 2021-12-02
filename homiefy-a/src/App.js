import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Market from "./components/Market"
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className="container">
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
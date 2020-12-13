import "./App.css";
import Navbar from "./Navbar";
import Fic from "./Fiction";
import Nonfic from "./Nonfiction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const Home = () =>(
    <div>
      <h1>Home Page</h1>
    </div>
  );

  return (
    <Router>
      <div>
        <nav>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/fiction"  component={Fic} />
            <Route path="/non-fiction"  component={Nonfic} />
          </Switch>
        </nav>
      </div>
    </Router>
  );

  
}

export default App;

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage.js";
import AllProducts from "./Component/Product/AllProducts";
import Contact from "./Component/Form/Form";

function App() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Products"> All Products</Link>
          </li>
          <li>
            <Link to="/Contact"> Contact Us</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/Home">
            <HomePage />
          </Route>
          <Route path="/Products">
            <AllProducts />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

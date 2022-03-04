import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Trangchu from "./pages/Trangchu";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" className="wrapper">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Trangchu} />

        </Switch>
        <Footer />
      </Router>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Overview, ProfileExp, ProfileEdu } from "./pages/Overview";
import Profile from "./pages/Profile";
import ProfileInfo from "./pages/ProfileInfo";
import Education from "./pages/Education";
import Security from "./pages/Security";
import Saved from "./pages/Saved";
import Support from "./pages/Support";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <Sidebar />
      {/* <Profile /> */}
      <Switch>
        <Route path="/overview" exact component={Profile} />
        <Route path="/overview/profileinfo" exact component={ProfileInfo} />
        <Route path="/overview/experience" exact component={Experience} />
        <Route path="/overview/education" exact component={Education} />
        <Route path="/security" exact component={Security} />
        <Route path="/saved" exact component={Saved} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
  );
}

export default App;

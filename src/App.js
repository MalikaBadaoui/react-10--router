import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {UserProfile, UserProfile2, UserProfile3, UserProfile4, UserProfile5} from "./components/UserProfile";

import { Home } from "./components/Home";
import { MyProfile } from "./components/MyProfile";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-profile">MyProfile</Link>
            </li>
            <li>
              <Link to="/user-profile/:Margaux Bédu">Margaux Bédu</Link>
            </li>
            <li>
              <Link to="/user-profile/:Jennifer Fromanger">Jennifer Fromanger</Link>
            </li>
            <li>
              <Link to="/user-profile/:Sarah Sahraoui">Sarah Sahraoui</Link>
            </li>
            <li>
              <Link to="/user-profile/:Berenice Despres">Berenice Despres</Link>
            </li>
            <li>
              <Link to="/user-profile/:Maxime Rawinski">Maxime Rawinski</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route path="/user-profile/:Margaux Bédu">
            <UserProfile />
          </Route>
          <Route path="/user-profile/:Jennifer Fromanger">
            <UserProfile2 />
          </Route>
          <Route path="/user-profile/:Sarah Sahraoui">
            <UserProfile3 />
          </Route>
          <Route path="/user-profile/:Berenice Despres">
            <UserProfile4 />
          </Route>
          <Route path="/user-profile/:Maxime Rawinski">
            <UserProfile5 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



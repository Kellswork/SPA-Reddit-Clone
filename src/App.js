import React from "react";
import Posts from "./components/Posts";
import SubredditPosts from './components/SubredditPosts'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/r/:subReddit">
          <SubredditPosts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

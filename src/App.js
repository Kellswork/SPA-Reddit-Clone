import React from "react";
import Posts from "./components/Posts";
import SubredditPosts from './components/SubredditPosts'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/">
          <Posts />
        </Route>
        <Route path="/test/:subreddit">
          <SubredditPosts />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

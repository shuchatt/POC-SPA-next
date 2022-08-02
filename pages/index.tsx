import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NextLink from 'next/link';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About (SPA Links)</Link>
          </li>
          <li>
            <Link to="/topics">Topics (SPA Links)</Link>
          </li>
          <li>
            <NextLink href="/settings">Settings (Server Side Rendered)</NextLink>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/topics">
            <h1>Topics</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import Aboutpage from './pages/aboutpage';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const fitilaRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <Homepage />
  },
  {
    path: '/about',
    exact: false,
    component: () => <Aboutpage />
  }
]

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {fitilaRoutes.map((e, i) => {
            return (
              <Route key={i} exact={e.exact} path={e.path} component={e.component} />
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

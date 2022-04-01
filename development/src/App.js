
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Start from './pages/Start';
import Home from './pages/HomePage/Home';
import Prediction from './pages/PredictionPage/Prediction';
import Matches from './pages/Matches/Matches';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/contactUs/Contact";

function App() {
  const history = createBrowserHistory();
  return (
      <div>
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/start" exact component={Start} />
                <Route path="/home" exact component={Home} />
                <Route path="/prediction" exact component={Prediction} />
                <Route path="/matches" exact component={Matches} />
                <Route path="/contact" exact component={Contact} />

            </Switch>
        </Router>
      </div>
  );
}

export default App;

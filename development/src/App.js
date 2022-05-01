import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Start from './pages/Start';
import Home from './pages/HomePage/Home';
import Prediction from './pages/PredictionPage/Prediction';
import Matches from './pages/Matches/Matches';
import Statistics from './pages/Statistics/Statistics';
import Player from './pages/Player/Player';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from "react-router-dom";
import About from './pages/aboutUs/About';
import Footer from './components/Footer/Footer';

function App() {
  const history = createBrowserHistory();
  return (
      <div>
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Start} />
                <Route path="/home" exact component={Home} />
                <Route path="/prediction" exact component={Prediction} />
                <Route path="/matches" exact component={Matches} />
                <Route path="/statistics" exact component={Statistics} />
                <Route path="/player" exact component={Player} />
                <Route path="/about" exact component={About} />
                

            </Switch>
            <Footer />
        </Router>
      </div>
  );
}

export default App;

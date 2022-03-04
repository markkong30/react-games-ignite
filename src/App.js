import React from 'react';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import NewGames from './pages/NewGames';
import UpcomingGames from './pages/UpcomingGames';
import GlobalStyle from './components/GlobalStyle';
import { Route, Switch } from 'react-router-dom';
import PopularGames from './pages/PopularGames';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path={["/games/:id", "/"]}>
          <Home />
        </Route>
        <Route exact path={["/popular_games/:id", "/popular_games"]}>
          <PopularGames />
        </Route>
        <Route exact path={["/new_games/:id", "/new_games"]}>
          <NewGames />
        </Route>
        <Route exact path={["/upcoming_games/:id", "/upcoming_games"]}>
          <UpcomingGames />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

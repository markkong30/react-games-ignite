import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from './redux/actions';
import './App.css';
import { popularGamesURL } from './api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [])
  console.log(useSelector(state => state.games))


  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadGames } from '../redux/actions';
import Game from '../components/Game';
import { upcomingGamesURL } from '../api';


const Home = () => {
    const dispatch = useDispatch();
    const { popularGames, newGames, upcomingGames } = useSelector(state => state.games);

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])



    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map(game => (
                    <Game key={game.id}
                        name={game.name} released={game.released} id={game.id} img={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0 5rem;

    h2 {
        padding: 3rem 0;
    }
    
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 3rem;
    
`


export default Home;
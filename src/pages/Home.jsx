import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { loadGames } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Game from '../components/Game';
import { fadeIn } from '../animation';


const Home = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { popularGames, newGames, upcomingGames, searchedGame } = useSelector(state => state.games);

    useEffect(() => {
        dispatch(loadGames());
        if (params.id) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';

        }
    }, [dispatch, params])


    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimatePresence>
                {params.id && <GameDetail id={params.id} />}
            </AnimatePresence>
            {searchedGame.length > 0 &&
                <div className="searched">
                    <h2>Searched Games</h2>
                    <Games>
                        {searchedGame.map(game => (
                            <Game key={game.id}
                                name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
                            />
                        ))}
                    </Games>
                </div>
            }

            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map(game => (
                    <Game key={game.id}
                        name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
                    />
                ))}
            </Games>

            <h2>Popular Games</h2>
            <Games>
                {popularGames.map(game => (
                    <Game key={game.id}
                        name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
                    />
                ))}
            </Games>

            <h2>New Games</h2>
            <Games>
                {newGames.map(game => (
                    <Game key={game.id}
                        name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
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
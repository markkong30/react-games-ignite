import React, { useEffect, useState } from 'react';
import GameDetail from '../components/GameDetail';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { loadGames } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Game from '../components/Game';
import { fadeIn } from '../animation';
import SkeletonDiv from '../components/Skeleton';
import Pagination from '../components/Pagination';

const PopularGames = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { popularGames, searchedGame } = useSelector(state => state.games);
    const [currentGames, setCurrentGames] = useState(null);

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    useEffect(() => {
        const games = popularGames.slice(0, 10);
        setCurrentGames(games);
    }, [popularGames])


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

            <h2>Popular Games</h2>
            {currentGames ?
                <Games>
                    {currentGames.map(game => (
                        <Game key={game.id}
                            name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
                        />
                    ))}
                </Games>

                :
                <Games>
                    {Array.from(new Array(10)).map((ele, i) => (
                        <SkeletonDiv key={i} />
                    ))}
                </Games>
            }

            <Pagination games={popularGames} setCurrentGames={setCurrentGames} />

        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0 5rem 3rem 5rem;
    margin-top: 70px;

    h2 {
        padding: 3rem 0;
    }

    @media (max-width: 700px) {
        padding: 0 2rem;
    }
    
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 3rem;

    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 2rem;

    }
`


export default PopularGames;
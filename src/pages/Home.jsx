import React, { useEffect, useState, useRef } from 'react';
import GameDetail from '../components/GameDetail';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { loadGames } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Game from '../components/Game';
import { fadeIn } from '../animation';
import { SkeletonDiv, SkeletonSlider, SkeletonSearch, SkeletonH2 } from '../components/Skeleton';
import Pagination from '../components/Pagination';
import ImgSlider from '../components/ImgSlider';
import Search from '../components/Search';

const Home = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { popularGames, newGames, upcomingGames, searchedGame } = useSelector(state => state.games);
    const { randomGames } = useSelector(state => state.randomGames);
    const [currentGames, setCurrentGames] = useState([]);

    useEffect(() => {
        const games = searchedGame.slice(0, 10);
        setCurrentGames(games);
    }, [searchedGame])

    return (
        <GameList >
            <AnimatePresence>
                {params.id && <GameDetail id={params.id} />}
            </AnimatePresence>

            <ImgSlider />

            {randomGames ?
                <Search />
                :
                <SkeletonSearch />
            }


            {currentGames.length > 0 &&
                <div className="searched">
                    <motion.h2 variants={fadeIn} initial="hidden" animate="show">Searched Games</motion.h2>
                    <Games>
                        {currentGames.map(game => (
                            <Game key={game.id}
                                name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
                            />
                        ))}
                    </Games>
                </div>
            }

            <Pagination games={searchedGame} setCurrentGames={setCurrentGames} />




            {randomGames ?
                <div style={{ display: currentGames.length ? "none" : "block" }}>
                    <motion.h2 variants={fadeIn} initial="hidden" animate="show">Random Games for you</motion.h2>
                    <Games>
                        {randomGames.map(game => (
                            <Game key={game.id}
                                name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
                            />
                        ))}
                    </Games>
                </div>
                :
                <>
                    <SkeletonH2 />
                    <Games>
                        {Array.from(new Array(10)).map((ele, i) => (
                            <SkeletonDiv key={i} />
                        ))}
                    </Games>
                </>

            }


        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0 5rem 3rem 5rem;
    overflow-x: hidden;

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

    @media (max-width: 1250px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 2rem;

    }
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    }
`

export default Home;
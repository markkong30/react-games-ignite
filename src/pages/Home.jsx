import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { loadGames } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Game from '../components/Game';
import { fadeIn } from '../animation';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { relativeTimeRounding } from 'moment';

const Home = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { popularGames, newGames, upcomingGames, searchedGame } = useSelector(state => state.games);

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    useEffect(() => {
        if (params.id) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [params])


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
            {upcomingGames.length > 0 ?
                <Games>
                    {upcomingGames.map(game => (
                        <Game key={game.id}
                            name={game.name} released={game.released} id={game.id} img={game.background_image} screenshots={{ screenshots: game.short_screenshots }}
                        />
                    ))}
                </Games>

                :
                <Games>
                    {Array.from(new Array(10)).map((ele, i) => (
                        <StyledSkeleton key={i}>
                            <SkeletonTheme color="#999999" >
                                <Skeleton width={"80%"} height={"10%"} style={{ marginTop: "1.5rem", marginBottom: "1rem" }} />
                                <Skeleton width={"20%"} height={"10%"} style={{ marginBottom: "0.5rem" }} />
                                <Skeleton style={{ height: "70%" }} />
                            </SkeletonTheme>
                        </StyledSkeleton>
                    ))}
                </Games>
            }




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

const StyledSkeleton = styled.div`
    position: relative;
    height: 40vh;
    box-shadow: 0 5px 20px rgba(0,0,0, 0.1);
    text-align: center;
    border-radius: 10px;
    background-color: white;

    @media (max-width: 1400px) {
        height: 40vh;
    }

    @media (max-width: 1208px) {
        height: 50vh;
    }

    @media (max-width: 750px) {
        height: 45vh;        
        margin-bottom: 1rem;

    }

    @media (max-width: 500px) {
        height: 30vh;
        margin-bottom: 2rem;

    }
`


export default Home;
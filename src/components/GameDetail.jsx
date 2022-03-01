import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const GameDetail = () => {
    const { gameDetail } = useSelector(state => state.gameDetail);

    return (
        <>
            {gameDetail &&
                <CardShadow>
                    <Detail>
                        <div className="stats">
                            <div className="rating">
                                <h3>{gameDetail.name}</h3>
                                <p>Rating: {gameDetail.rating}</p>
                            </div>
                            <div className="info">
                                <h3>Platforms</h3>
                                <div className="platforms">
                                    {gameDetail.platforms.map(platforms => (
                                        <h3 key={platforms.platform.id}>
                                            {platforms.platform.name}
                                        </h3>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="media">
                            <img src={gameDetail.background_image} alt="" />
                        </div>
                        <div className="description">
                            <p>{gameDetail.description_raw}</p>
                        </div>
                        <div className="gallery">
                            {gameDetail.screenshots.map(screenshot => (
                                <img key={screenshot.id} src={screenshot.image} alt="" />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            }

        </>

    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    height: 100vh;
    /* overflow-y: scroll; */
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
`

const Detail = styled(motion.div)`
    /* width: 80%; */
    height: 100vh;
    border-radius: 1rem;
    padding: 2rem 15vw;
    background: white;
    position: absolute;
    left: 10%;
    right: 10%;
    overflow-y: scroll;

    img {
        width: 100%;
    }
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7670;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }

`

export default GameDetail;
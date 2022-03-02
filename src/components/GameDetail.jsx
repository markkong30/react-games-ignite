import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";


const GameDetail = (props) => {
    const { id } = props;
    const { gameDetail, isLoading } = useSelector(state => state.gameDetail);
    const inside = useRef();
    const history = useHistory();
    useEffect(() => {
        document.body.addEventListener("mousedown", checkClickOutside)
    }, [])

    const checkClickOutside = (e) => {
        document.body.removeEventListener("mousedown", checkClickOutside);
        if (inside.current.contains(e.target)) {
            document.body.addEventListener("mousedown", checkClickOutside)
            return;
        }

        document.body.style.overflow = 'auto';
        history.push('/');
    }

    const getPlatform = platform => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }

    const getStarRating = () => {
        const fullStars = Math.round(gameDetail.rating);
        const emptyStars = 5 - fullStars;
        const stars = [...new Array(fullStars).fill('full'), ...new Array(emptyStars).fill('empty')];
        return stars;
    }


    return (
        <>
            {!isLoading &&
                <CardShadow>
                    <Detail ref={inside} layoutId={id}>
                        <Stats>
                            <div className='rating'>
                                <h3>{gameDetail.name}</h3>
                                <p>Rating:
                                    <span>
                                        {getStarRating().map((star, index) => (
                                            <img key={index} src={star == 'full' ? starFull : starEmpty} alt="" />

                                        ))}
                                    </span>
                                </p>

                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {gameDetail.platforms.map(platforms => (
                                        <img key={platforms.platform.id}
                                            src={getPlatform(platforms.platform.name)} alt={platforms.platform.name}
                                        />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>

                        <Media>
                            <motion.img layoutId={`image ${id}`} src={gameDetail.background_image} alt="" />
                        </Media>
                        <Description>
                            <p>{gameDetail.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {gameDetail.screenshots.map((screenshot, index) => {
                                if (index > 0) {
                                    return (
                                        <img key={screenshot.id} src={screenshot.image} alt="" />
                                    )
                                }
                            })}
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
    z-index: 10;

`

const Detail = styled(motion.div)`
    width: 80%;
    height: 100vh;
    border-radius: 1rem;
    padding: 2rem 10vw;
    background: white;
    position: absolute;
    left: 10%;
    /* right: 10%; */
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

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        margin-left: 0.6rem;
    }

    img {
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    p {
        display: flex;
        align-items: center;
        line-height: 1;

    }
`



const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 3rem;

    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`

const Description = styled(motion.div)`
    margin: 3rem 0;
`



export default GameDetail;
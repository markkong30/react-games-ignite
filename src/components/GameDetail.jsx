import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import { getGenresColor, getPlatform } from '../utils';
import { loadDetail } from '../redux/actions';


const GameDetail = (props) => {
    const { id } = props;
    const { gameDetail, isLoading, screenshots } = useSelector(state => state.gameDetail);
    const inside = useRef();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDetail(id))
        document.body.addEventListener("mousedown", checkClickOutside)
        console.log(id)
    }, [id])

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => document.body.style.overflowY = 'auto';

    }, [])


    const checkClickOutside = (e) => {
        document.body.removeEventListener("mousedown", checkClickOutside);
        if (inside.current.contains(e.target)) {
            document.body.addEventListener("mousedown", checkClickOutside)
            return;
        }

        document.body.style.overflow = 'auto';
        history.goBack();
    }



    const getStarRating = () => {
        const fullStars = Math.round(gameDetail.rating);
        const emptyStars = 5 - fullStars;
        const stars = [...new Array(fullStars).fill('full'), ...new Array(emptyStars).fill('empty')];
        return stars;
    }

    const closeDetail = () => {
        document.body.style.overflow = 'auto';
        history.goBack();
    }


    return (
        <>
            {!isLoading &&
                <CardShadow>
                    <Detail ref={inside} layoutId={id}>
                        <Media>
                            <motion.img id="top-img" layoutId={`image ${id}`} src={gameDetail.background_image} alt="" />
                            <Votes>
                                {gameDetail.ratings.map(vote => (
                                    <div className="vote" key={vote.id}>
                                        <span>{vote.title}</span>
                                        <Percent percent={vote.percent}></Percent>
                                    </div>
                                ))}

                            </Votes>
                        </Media>

                        <Stats>
                            <div className='rating'>
                                <h3 className='title'>{gameDetail.name}</h3>
                                <h4>
                                    {gameDetail.developers[0].name}
                                    <a href={gameDetail.website} target="_blank">Official Website</a>
                                </h4>
                                <p>Rating:
                                    <span>
                                        {getStarRating().map((star, index) => (
                                            <img key={index} src={star == 'full' ? starFull : starEmpty} alt="" />

                                        ))}
                                    </span>
                                </p>
                                <div className='genres'>
                                    {gameDetail.genres.map(genre => (
                                        <Genres key={genre.id} color={getGenresColor(genre.name)}>{genre.name}</Genres>
                                    ))}
                                </div>
                            </div>

                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {gameDetail.platforms.map(platforms => (
                                        <img className={platforms.platform.name} key={platforms.platform.id}
                                            src={getPlatform(platforms.platform.name)} alt={platforms.platform.name}
                                        />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>

                        <Description>
                            <p>{gameDetail.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screenshots.results.map((screenshot, index) => {
                                if (index > 0) {
                                    return (
                                        <img key={screenshot.id} src={screenshot.image} alt="" />
                                    )
                                }
                            })}
                        </div>

                        <CloseButton>
                            <p onClick={closeDetail}><i className="fa-solid fa-xmark"></i></p>
                        </CloseButton>
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
    overflow-y: scroll;

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

const Detail = styled(motion.div)`
    margin: 0.5rem 0;
    width: 80%;
    min-height: 100vh;
    border-radius: 1rem;
    background: white;
    position: absolute;
    left: 10%;

    img {
        width: 100%;
        &:last-child {
            border-radius: 0 0 1rem 1rem;
        }
    }
    

    @media (max-width: 1000px) {
        left: 5%;
        width: 90%;
    }

    @media (max-width: 550px) {
        left: 0;
        width: 100%;
        margin: 0;
    } 

`

const Stats = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1rem 1rem 0 0;

    
    h2, h3, h4, p, span, a {
        color: white;

    }


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

    .title {
        padding-bottom: 0;
    }

    h4 {
        margin: 0.2rem 0 1rem 0;
        color: #d4d4d4;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 0.8rem;

        a {
            color: #e9e9e9;
            margin-left: 1rem;
            letter-spacing: 0px;
            text-decoration: underline;
            font-style: italic;
        }

    }

    @media (max-width: 900px) {
        display: block;
    }
`
const Genres = styled.div`
    display: inline-block;
    margin: 1.5rem 0 0 0;
    padding: 0.3rem 0.8rem;
    background: ${props => props.color};
    color: white;
    &:first-child {
        border-radius: 5px 0 0 5px;
    }
    &:last-child {
        border-radius: 0 5px 5px 0;
    }
`

const Info = styled(motion.div)`
    text-align: center;
    max-width: 65%;

    @media (max-width: 900px){
        max-width: 100%;

    }
    
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin: 0 1.5rem;
        width: 30px;
        height: 30px;

        &:not(.PC){
            filter: brightness(3);
        }
    }

    @media (max-width: 900px) {
        img {
        margin: 0;
        }   
    }

    @media (max-width: 700px) {
        img {
            width: 20px;
            height: 20px;
        }
    }
`
const Media = styled(motion.div)`
    height: 70vh;
    position: relative;
    
    #top-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem 1rem 0 0;
    }

    @media (max-width: 900px) {
        height: 100vh;
    }
`

const Votes = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    width: 35%;
    height: 35%;
    border: 1.5px solid #d6d6d6;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    /* padding: 3rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .vote {
        display: flex;
        align-items: center;
        margin: 0 2rem;
    }
    span {
        display: inline-block;
        color: white;
        flex-basis: 50%;
        margin-right: 1rem;
    }

    @media (max-width: 1200px) {
        width: 50%;
    }

    @media (max-width: 800px) {
        width: 70%;
    }
    
`
const Percent = styled.div`
        background-color: white;
        height: 10px;
        width: calc(${props => props.percent}% / 2);
`

const Description = styled(motion.div)`
    margin: 3rem 0;
    padding: 0 5rem;
    
    @media (max-width: 700px) {
        padding: 0 2rem;
        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 550px) {
        p {
            font-size: 0.8rem;
        }

    }
`

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    
    p {
        font-size: 2rem;
        line-height: 1;
        cursor: pointer;
        color: #ebebeb;
    }

    @media (min-width: 550px) {
        display: none;
    }
`

export default GameDetail;


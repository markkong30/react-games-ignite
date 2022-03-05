import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation';
import { loadGames, randomGames } from '../redux/actions';
import { SkeletonSlider } from './Skeleton';


const ImgSlider = (props) => {
    const { popularGames, newGames, upcomingGames } = useSelector(state => state.games);
    const [games, setGames] = useState(null);
    const [numbers, setNumbers] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
        console.log('dis')
    }, [dispatch])

    useEffect(() => {
        const randomNumber = () => Math.floor(Math.random() * 30);
        let numbers = Array(8).fill().map(() => randomNumber());

        while (new Set(numbers).size !== numbers.length) {
            numbers = Array(8).fill().map(() => randomNumber());
        }

        setNumbers(numbers);
        console.log('s')
    }, [])

    useEffect(() => {
        if (popularGames.length > 0) {
            let gameExtract = [];
            let gameFull = [];
            console.log(popularGames)
            numbers.forEach((number, i) => {
                switch (true) {
                    case (i <= 3):
                        gameExtract = [...gameExtract, ...[[popularGames[number].short_screenshots[0].image, popularGames[number].id]]];
                        gameFull = [...gameFull, ...[popularGames[number]]];
                        break;
                    case (i >= 5):
                        gameExtract = [...gameExtract, ...[[newGames[number].short_screenshots[0].image, newGames[number].id]]];
                        gameFull = [...gameFull, ...[newGames[number]]];
                        break;
                    default:
                        gameExtract = [...gameExtract, ...[[upcomingGames[number].short_screenshots[0].image, upcomingGames[number].id]]];
                        gameFull = [...gameFull, ...[upcomingGames[number]]];
                }

            })
            console.log(gameFull)
            setGames(gameExtract);
            dispatch(randomGames(gameFull));
        }

    }, [popularGames])


    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <StyledSlider  >
                {games ?
                    <motion.div variants={fadeIn} initial="hidden" animate="show">


                        <Slider {...settings} >
                            {games.map((game, i) => (
                                <div key={i} >
                                    <Link to={`/games/${game[1]}`}>
                                        <img src={game[0]} alt="" />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </motion.div>
                    :
                    <SkeletonSlider />


                }

            </StyledSlider>
        </>
    );
};

const StyledSlider = styled(motion.div)`
    margin-top: 70px;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
        border-radius: 5px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            border: 4px solid #ff7676;
        }

    }

    .slick-list {
        overflow: visible;
    }

    ul li button {
        &::before {
            font-size: 10px;
        }
    }

    .slick-dots li.slick-active button::before {
        color: #ff7676;
    }

    button {
        z-index: 1;
    }

    @media (max-width: 550px) {
        img {
            height: 30vh;
        }
    }
`

export default ImgSlider;
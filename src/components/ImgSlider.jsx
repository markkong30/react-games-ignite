import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetail } from '../redux/actions';

const ImgSlider = () => {
    const { popularGames, newGames, upcomingGames } = useSelector(state => state.games);
    const [games, setGames] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (popularGames.length > 0) {
            const randomNumber = () => Math.floor(Math.random() * 30);
            const img = (game) => [game[randomNumber()].short_screenshots[0].image, game[randomNumber()].id];

            const games = [img(popularGames), img(newGames), img(upcomingGames), img(popularGames), img(newGames), img(upcomingGames)];
            setGames(games);
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
        <StyledSlider>
            {games &&
                <Slider {...settings}>
                    {games.map((game, i) => (
                        <div key={i} >
                            <Link to={`/games/${game[1]}`}>
                                <img src={game[0]} alt="" />
                            </Link>
                        </div>
                    ))}

                </Slider>
            }

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
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
`

export default ImgSlider;
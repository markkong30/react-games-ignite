import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { loadDetail } from '../redux/actions';

const Game = (props) => {
    const { name, released, img, id, screenshots } = props;
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        dispatch(loadDetail(id, screenshots))
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={img} alt="" />

        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0,0,0, 0.2);
    text-align: center;
    border-radius: 10px;

    img {
        width: 100%;
        aspect-ratio: 3.5/2;
        border-radius: 0 0 10px 10px;
        object-fit: cover;

    }
`

export default Game;
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { loadDetail } from '../redux/actions';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { popUp } from '../animation';

const Game = (props) => {
    const { name, released, img, id, screenshots } = props;
    const dispatch = useDispatch();
    const params = useParams();
    const stringPathId = id.toString();

    useEffect(() => {
        if (params.id == id) {
            loadDetailHandler();
        }
    }, [params.id])

    const loadDetailHandler = () => {
        dispatch(loadDetail(id, screenshots))
    }

    return (
        <StyledGame variants={popUp} initial="hidden" animate="show" whileHover="hover"
            layoutId={stringPathId}>


            <Link to={`/games/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={img} alt="" />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0,0,0, 0.2);
    text-align: center;
    border-radius: 10px;
    cursor: pointer;


    img {
        width: 100%;
        aspect-ratio: 3.5/2;
        border-radius: 0 0 10px 10px;
        object-fit: cover;

    }
`

export default Game;
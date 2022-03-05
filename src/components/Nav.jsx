import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from "../img/logo.svg";
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animation';
import { Link } from 'react-router-dom';
import { scrollTop } from '../utils';

const Nav = () => {
    const dispatch = useDispatch();

    const homeHandler = () => {
        dispatch({ type: "CLEAR_SEARCHED" });

        scrollTop();
    }

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Navbar>
                <Link to="/">
                    <Logo onClick={homeHandler}>
                        <img src={logo} alt="" />
                        <h1>Ignite</h1>
                    </Logo>
                </Link>

                <ul>
                    <Link to="/popular_games" onClick={scrollTop}>
                        <li>Popular Games</li>
                    </Link>
                    <Link to="/new_games" onClick={scrollTop}>
                        <li>New Games</li>
                    </Link>
                    <Link to="/upcoming_games" onClick={scrollTop}>
                        <li>Upcoming Games</li>
                    </Link>
                </ul>
            </Navbar>


        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    text-align: center;
    width: 100%;    
    
`

const Navbar = styled(motion.div)`
    display: flex;
    position: fixed;
    z-index: 10;
    background-color: white;
    top: 0;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 550px) {
            padding: 0 0.5rem;
        }

    ul {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        flex-basis: 70%;
        justify-content: flex-end;
        

        @media (max-width: 550px) {
            gap: 0.5rem;
            font-size: 0.9rem;
        }
    }

    li {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            height: 2px;
            width: 100%;
            background: linear-gradient(to left, #ff5f6d, #ffc371);
            transform-origin: left center;
            opacity: 0;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out;

        }

        &:hover{
            &::after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
        
    }
    
`

const Logo = styled(motion.div)`
    display: flex;
    cursor: pointer;
    color: #d35050;

    img {
        margin-right: 0.5rem;
        display: inline-block;
    }
    
`


export default Nav;
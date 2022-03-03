import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from "../img/logo.svg";
import { gameSearch } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animation';

const Nav = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(gameSearch(searchInput));
        setSearchInput('');
    }


    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={() => dispatch({ type: "CLEAR_SEARCHED" })}>
                <img src={logo} alt="" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search" onSubmit={submitSearch}>
                <input onChange={(e) => setSearchInput(e.target.value)} type="text" value={searchInput} />
                <button>search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    padding: 3rem;
    text-align: center;
    width: 100%;

    input {
        width: 30%;
        height: 2.5rem;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        border-radius: 5px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;

        &:focus {
            border: 1px solid orangered;
            outline: none;
        }
    }

    button {
        font-size: 1.5rem;
        border: none;
        cursor: pointer;
        padding: 0.5rem 2rem;
        margin-left: 0.5rem;
        background: #ff7676;
        color: white;
        border-radius: 5px;
        &:hover {
            color: #ff7676;
            background-color: white;
            border: 2px solid #ff7676;

        }
        transition: all 0.3s ease;
    }
`

const Logo = styled(motion.div)`
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
    cursor: pointer;

    img {
        margin-right: 0.5rem;
        display: inline-block;
    }
    
`

export default Nav;
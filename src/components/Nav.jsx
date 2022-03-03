import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from "../img/logo.svg";
import { gameSearch } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animation';
import { Link } from 'react-router-dom';

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
            <Navbar>
                <Link to="/">
                    <Logo onClick={() => dispatch({ type: "CLEAR_SEARCHED" })}>
                        <img src={logo} alt="" />
                        <h1>Ignite</h1>
                    </Logo>
                </Link>

                <ul>
                    <Link to="/">
                        <li>Popular Games</li>
                    </Link>
                    <Link to="/new_games">
                        <li>New Games</li>
                    </Link>
                    <Link to="/upcoming_games">
                        <li>Upcoming Games</li>
                    </Link>
                </ul>
            </Navbar>
            <Search>
                <form className="search" onSubmit={submitSearch}>
                    <input onChange={(e) => setSearchInput(e.target.value)} type="text" value={searchInput} />
                    <button>search</button>
                </form>
            </Search>

        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
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

    ul {
        list-style: none;
        display: flex;
        gap: 1.5rem;
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

const Search = styled(motion.div)`
    padding: 8rem 2rem 2rem 2rem;
`



export default Nav;
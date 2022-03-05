import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gameSearch } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { fadeInSearch } from '../animation';


const Search = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(gameSearch(searchInput));
        setSearchInput('');
    }

    return (
        <StyledSearch variants={fadeInSearch} initial="hidden" animate="show" >
            <form className="search" onSubmit={submitSearch}>
                <input onChange={(e) => setSearchInput(e.target.value)} type="text" value={searchInput} />
                <button>search</button>
            </form>
        </StyledSearch>
    );
};

const StyledSearch = styled(motion.div)`
    padding-top: 5rem;


    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    input {
        margin-right: 1rem;
        width: 50%;
        height: 2.5rem;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
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

    @media (max-width: 550px) {
        input {
            width: 60%;
        }

        button {
            font-size: 1rem;
            padding: 0.5rem 1rem;
        }

        input {
            height: 2rem;
        }
    }
`

export default Search;
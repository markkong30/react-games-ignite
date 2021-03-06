import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Pagination = ({ games, setCurrentGames }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const gamesPerPage = 10;
    const pageCount = Math.ceil(games.length / gamesPerPage);
    const pageChange = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        updateGames();
    }, [pageNumber])


    const updateGames = () => {
        const gamesVisited = pageNumber * gamesPerPage;
        const displayGames = games.slice(gamesVisited, gamesVisited + gamesPerPage);
        setCurrentGames(displayGames)
        console.log(displayGames)
        window.scrollTo({
            top: 0
        })

    }

    return (
        <Paginate display={games.length ? "block" : "none"}>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName='paginationBtns'
                previousLinkClassName='previousBtn'
                nextLinkClassName='nextBtn'
                disabledClassName='disabled'
                activeClassName='active'
            />
        </Paginate>

    )

}

const Paginate = styled.div`
    padding-top: 5rem;
    margin: 0 auto;
    position: relative;
    display: ${props => props.display};

    .paginationBtns {
        display: flex;
        justify-content: center;
        list-style: none;
        height: 40px;

        a {
            padding: 0.8rem;
            margin: 0.8rem;
            border-radius: 5px;
            border: 1px solid #ff7676;
            color:#D35050;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                color: white;
                background-color: #ff7676;
            }

        }
    }

    .active a {
        color: white;
        background-color: #ff7676;
    }

    .disabled a {
        color: grey;
        border-color: grey;
    }

    .disabled {
        pointer-events: none;
        opacity: 0.5;
    }

`

export default Pagination;
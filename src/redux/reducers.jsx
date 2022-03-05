import { combineReducers } from "redux";

const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGame: [],
}

const initialState_Detail = {
    gameDetail: null,
    screenshots: null,
    isLoading: true,
}

const initialState_RandomGames = {
    randomGames: null,
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popularGames,
                upcomingGames: action.payload.upcomingGames,
                newGames: action.payload.newGames,
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searchedGame: action.payload.searchedGame,
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searchedGame: [],
            }
        default:
            return { ...state }
    }
}

const detailReducer = (state = initialState_Detail, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                gameDetail: action.payload.gameDetail,
                screenshots: action.payload.screenshots,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state }
    }
}

const randomGamesReducer = (state = initialState_RandomGames, action) => {
    switch (action.type) {
        case "SAVE_SLIDER":
            return {
                ...state,
                randomGames: action.payload.randomGames,
            }
        case "CLEAR_SLIDER":
            return {
                ...state,
                randomGames: null,
            }
        default:
            return { ...state }
    }
}





export const rootReducer = combineReducers({
    games: gamesReducer,
    gameDetail: detailReducer,
    randomGames: randomGamesReducer,
})

import { combineReducers } from "redux";

const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGame: [],
}

const initialState_Detail = {
    gameDetail: null,
    isLoading: true,
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





export const rootReducer = combineReducers({
    games: gamesReducer,
    gameDetail: detailReducer,
})

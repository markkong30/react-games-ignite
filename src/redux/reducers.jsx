import { combineReducers } from "redux";

const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
}

const initialState_Detail = {
    gameDetail: null,
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
        default:
            return { ...state }
    }
}

const detailReducer = (state = initialState_Detail, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                gameDetail: action.payload.gameDetail
            }
        default:
            return { ...state }
    }
}



export const rootReducer = combineReducers({
    games: gamesReducer,
    gameDetail: detailReducer,
})

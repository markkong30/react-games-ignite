import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, gameDetailsURL, gameSearchURL, gameScreenshotURL } from "../api";

export const loadGames = () => async (dispatch) => {

    const popularGames = await axios.get(popularGamesURL);
    const upcomingGames = await axios.get(upcomingGamesURL);
    const newGames = await axios.get(newGamesURL);

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGames.data.results,
            upcomingGames: upcomingGames.data.results,
            newGames: newGames.data.results,
        }
    })
}

export const loadDetail = (game_id, screenshots) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL"
    })

    const detailData = await axios.get(gameDetailsURL(game_id));
    const screenShotData = await axios.get(gameScreenshotURL(game_id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            gameDetail: { ...detailData.data, ...screenshots },
            screenshots: screenShotData.data,
        }
    })
}

export const gameSearch = game_name => async (dispatch) => {
    const searchedGame = await axios.get(gameSearchURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searchedGame: searchedGame.data.results,
        }
    })
}
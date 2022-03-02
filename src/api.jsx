import moment from "moment";

const base_url = `https://api.rawg.io/api`;

const currentMonth = moment().format('MM');
const currentDay = moment().format('DD');
const currentYear = moment().format('YYYY');
const currentDate = moment().format('YYYY-MM-DD');
const lastYear = moment().subtract(1, 'year').format('YYYY-MM-DD');
const nextYear = moment().add(1, 'year').format('YYYY-MM-DD');

const popularGames = `/games?key=${process.env.REACT_APP_GAME_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `/games?key=${process.env.REACT_APP_GAME_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `/games?key=${process.env.REACT_APP_GAME_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = `${base_url}${popularGames}`;
export const upcomingGamesURL = `${base_url}${upcomingGames}`;
export const newGamesURL = `${base_url}${newGames}`;

export const gameDetailsURL = (game_id) => `${base_url}/games/${game_id}?key=${process.env.REACT_APP_GAME_API_KEY}`

export const gameSearchURL = (game_name) => `${base_url}/games?key=${process.env.REACT_APP_GAME_API_KEY}&search=${game_name}&ordering=-rating`

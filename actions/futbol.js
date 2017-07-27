import axios from axios;
import actions from '../utils/actionsTypes';

const API_KEY = 'Your API token: 65cb60e720d14a089c719e65798f4269';
const URL = 'http://api.football-data.org/v1/';

let api = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {'X-Auth-Token': API_KEY}
});

export const getCompetitions = () => {
  type : actions.GET_COMPETITIONS,
  payload : api.get('competitions');
};

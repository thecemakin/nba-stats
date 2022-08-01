import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { gamesMockData } from './Games';
import { StandigsMockData } from './Standings'
import { PlayersMockData} from './Players'


let mock = new MockAdapter(Axios);

export const initGamesMockAdapter = () => {
    mock.onGet("/games", { params: { date: '2022-02-12' } }).reply(200, gamesMockData);
}


export const initStandsMockAdapter = () => {
    mock.onGet("/standings").reply(200, StandigsMockData);
}

export const initPLayersMockAdapter = () => {
    mock.onGet("/players").reply(200, PlayersMockData);
}


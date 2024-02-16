import {Joke} from "../../Model/Joke";
import {CustomJoke} from "../../Model/CustomJoke";

export enum ActionType {
    FETCH_JOKES = 'FETCH_JOKES',
}

interface actionFetch {
    type: ActionType.FETCH_JOKES;
    payload: Joke[];
}

export type Action = actionFetch;

export const setJokeList = (jokeList: Joke[]) => {
    return {
        type: ActionType.FETCH_JOKES,
        payload: jokeList,
    };
}

export const getJokeList = () => {
    return async dispatch => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes');
            //Then use the json method to get json data from api/
            const jokeListJson = await jokePromise.json();
            const jokeList: Joke[] = jokeListJson.map(elt => new CustomJoke(elt["type"], elt["setup"], "jsp", elt["image"], elt["id"]));
            dispatch(setJokeList(jokeList));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}
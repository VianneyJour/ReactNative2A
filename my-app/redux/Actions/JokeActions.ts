import {Joke} from "../../Model/Joke";
import {CustomJoke} from "../../Model/CustomJoke";
import {SampleJoke} from "../../Model/SampleJoke";

export enum ActionType {
    FETCH_JOKE = 'FETCH_JOKE',
    FETCH_JOKES = 'FETCH_JOKES',
    FETCH_LAST_JOKES = 'FETCH_LAST_JOKES',
}

interface actionFetch {
    type: ActionType;
    payload: Joke[];
}

export type Action = actionFetch;

export const setJokeList = (jokeList: Joke[]) => {
    return {
        type: ActionType.FETCH_JOKES,
        payload: jokeList,
    };
}

export const setLastJokeList = (jokeList: Joke[]) => {
    return {
        type: ActionType.FETCH_LAST_JOKES,
        payload: jokeList,
    };
}

export const setJoke = (joke: Joke) => {
    return {
        type: ActionType.FETCH_JOKE,
        payload: joke,
    };
}

export const getJokeList = () => {
    return async dispatch => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/samples');
            const jokeListJson = await jokePromise.json();
            const jokeList: Joke[] = jokeListJson.map(elt => new CustomJoke(elt["type"], elt["setup"], "jsp", elt["image"], elt["id"]));
            dispatch(setJokeList(jokeList));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const getLastList = () => {
    return async dispatch => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/lasts');
            const jokeListJson = await jokePromise.json();
            const jokeList: Joke[] = jokeListJson.map(elt => new CustomJoke(elt["type"], elt["setup"], "jsp", elt["image"], elt["id"]));
            dispatch(setLastJokeList(jokeList));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const getJokeById = (id : String) => {
    return async dispatch => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/samples/' + id);
            const jokeJson = await jokePromise.json();
            let jokeParse = JSON.parse(JSON.stringify(jokeJson))
            const joke = new SampleJoke(
                jokeParse.type,
                jokeParse.setup,
                jokeParse.punchline,
                jokeParse.image,
                jokeParse.id);
            dispatch(setJoke(joke))
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const pushCustomJoke = (jokeC : CustomJoke) => {
    return async () => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes',{
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: jokeC.type,
                    setup: jokeC.setup,
                    punchline: jokeC.punchline,
                }),

            });
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}
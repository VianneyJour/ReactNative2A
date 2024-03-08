import {Joke} from "../../Model/Joke";
import {Action} from "redux";
import {ActionType} from "../Actions/JokeActions";
import {SampleJoke} from "../../Model/SampleJoke";
import {CustomJoke} from "../../Model/CustomJoke";

interface State {
    joke: Joke,
    jokes: Joke[],
    lastJokes: Joke[],
    favoriteJokes: Joke[],
}

const initialState = {
    joke: new SampleJoke("vide","vide","vide","vide",5),
    jokes: [],
    lastJokes: [],
    favoriteJokes: [],
}

const jokeReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_JOKES:
            // @ts-ignore
            return {...state, jokes: action.payload};
        case ActionType.FETCH_LAST_JOKES:
            // @ts-ignore
            return {...state, lastJokes: action.payload};
        case ActionType.FETCH_JOKE:
            // @ts-ignore
            return {...state, joke: action.playload};
        default:
            return state;
    }
}
export default jokeReducer
import {Joke} from "../../Model/Joke";
import {Action} from "redux";
import {ActionType} from "../Actions/JokeActions";

interface State {
    jokes: Joke[],
    lastJokes: Joke[],
    favoriteJokes: Joke[],
}

const initialState = {
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
        default:
            return state;
    }
}
export default jokeReducer
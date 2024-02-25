import {Action} from "redux";
import {ActionType} from "../Actions/CategoryActions";

interface State {
    TopCategories: String[],
}

const initialState = {
    TopCategories: [],
}

const categoryReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_TOP_CATEGORIES:
            // @ts-ignore
            return {...state, TopCategories: action.payload};
        default:
            return state;
    }
}
export default categoryReducer
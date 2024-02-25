import {configureStore} from '@reduxjs/toolkit'
import jokeReducer from './Reducers/JokeReducer';
import categoryReducer from "./Reducers/CategoryReducer";

// Reference here all your application reducers
const reducer = {
    jokeReducer: jokeReducer,
    categoryReducer: categoryReducer,
}

// @ts-ignore
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);

export default store;
import {configureStore} from '@reduxjs/toolkit'
import jokeReducer from './Reducers/JokeReducer';

// Reference here all your application reducers
const reducer = {
    jokeReducer: jokeReducer,
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
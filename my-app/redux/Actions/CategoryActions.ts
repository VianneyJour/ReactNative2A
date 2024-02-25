export enum ActionType {
    FETCH_TOP_CATEGORIES = 'FETCH_TOP_CATEGORIES',
}

interface actionFetch {
    type: ActionType;
    payload: String[];
}

export type Action = actionFetch;

export const setTopCategoriesList = (categoriesList: String[]) => {
    return {
        type: ActionType.FETCH_TOP_CATEGORIES,
        payload: categoriesList,
    };
}

export const getTopCategoriesList = () => {
    return async dispatch => {
        try {
            const categoriesPromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/categories/top');
            const categoriesListJson = await categoriesPromise.json();
            const categoriesList: String[] = categoriesListJson.map(elt => elt["name"]);
            dispatch(setTopCategoriesList(categoriesList));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}
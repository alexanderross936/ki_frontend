import Axios from "axios"
import { ADD_RECIPE } from "./types";

export const addRecipe = formData => async dispatch => {
    try {
        await axios.post('/add_recipe');

        dispatch({
            type: ADD_RECIPE,
            payload: id
        });

        dispatch(setAlert('Post Added', 'success'));

    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
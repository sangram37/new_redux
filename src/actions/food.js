import {ADD_FOOD, DELETE_FOOD} from '../config/Config';

export const addfood = (food) => {
  return async(dispatch) => {
    dispatch({type: ADD_FOOD, data: food})
  }
}

export const deletefood = (key) => {
  return async(dispatch) => {
    dispatch({type: DELETE_FOOD, key: key});
  }
}

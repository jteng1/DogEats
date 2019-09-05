import {
  FETCH_FOODS,
  SET_LOADING,
  CLEAR_FILTER,
  ADD_FOOD,
  DELETE_FOOD,
  FOOD_ERROR,
  FILTER_FOODS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        foods: action.payload,
        numberOfItems: action.payload.length,
        loading: false
      };
    case FILTER_FOODS:
      return {
        ...state,
        filtered: state.foods.filter(food => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return food.foodName.match(regex);
        })
      };
    case ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload],
        loading: false
      };
    case DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter(food => food._id !== action.payload),
        numberOfItems: state.numberOfItems - 1,
        loading: false
      };
    case FOOD_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

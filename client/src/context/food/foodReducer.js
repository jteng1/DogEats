import {
  FETCH_FOODS,
  SET_LOADING,
  CLEAR_FILTER,
  ADD_FOOD,
  EDIT_FOOD,
  DELETE_FOOD,
  FOOD_ERROR,
  FILTER_FOODS,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        foods: action.payload,
        numberOfItems: action.payload.length,
        filtered: null,
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
        numberOfItems: state.numberOfItems + 1,
        loading: false
      };
    case EDIT_FOOD:
      return {
        ...state,
        foods: state.foods.map(food =>
          food._id === action.payload._id ? action.payload : food
        ),
        filtered: null,
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
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
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

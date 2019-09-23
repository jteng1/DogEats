import React, { useReducer } from 'react';
import axios from 'axios';
import FoodContext from './foodContext';
import FoodReducer from './foodReducer';
import {
  FETCH_FOODS,
  FILTER_FOODS,
  CLEAR_FILTER,
  SET_LOADING,
  ADD_FOOD,
  EDIT_FOOD,
  DELETE_FOOD,
  FOOD_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const FoodState = props => {
  const initialState = {
    foods: [],
    food: {},
    current: null,
    numberOfItems: null,
    filtered: null,
    loading: false
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  // Fetch all food data from database
  const fetchFoods = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/foods/');

      dispatch({ type: FETCH_FOODS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  // Filter Foods
  const filterFoods = text => {
    dispatch({ type: FILTER_FOODS, payload: text });
  };

  // Add a Food
  const addFood = async food => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(
        'http://localhost:5000/api/foods/add',
        food,
        config
      );

      dispatch({ type: ADD_FOOD, payload: res.data });
    } catch (err) {
      dispatch({ type: FOOD_ERROR, payload: err.response.msg });
    }
  };

  // Edit a Food
  const editFood = async food => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/api/foods/${food._id}`,
        food,
        config
      );

      dispatch({ type: EDIT_FOOD, payload: res.data });
      console.log(res.data);
    } catch (err) {
      dispatch({ type: FOOD_ERROR, payload: err.response.msg });
    }
  };

  // Delete a Food
  const deleteFood = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/foods/${id}`);

      dispatch({ type: DELETE_FOOD, payload: id });
      clearFilter();
    } catch (err) {
      dispatch({ type: FOOD_ERROR, payload: err.response.msg });
    }
  };

  // Set Current
  const setCurrent = food => dispatch({ type: SET_CURRENT, payload: food });

  // Clear Current
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  // Clear Foods
  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <FoodContext.Provider
      value={{
        foods: state.foods,
        food: state.food,
        numberOfItems: state.numberOfItems,
        filtered: state.filtered,
        current: state.current,
        loading: state.loading,
        fetchFoods,
        filterFoods,
        clearFilter,
        setCurrent,
        clearCurrent,
        addFood,
        editFood,
        deleteFood,
        setLoading
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;

import React, { Fragment, useState, useContext, useEffect } from 'react';

import AlertContext from '../../context/alert/alertContext';
import FoodContext from '../../context/food/foodContext';

const Current = props => {
  const alertContext = useContext(AlertContext);
  const foodContext = useContext(FoodContext);

  const { setAlert } = alertContext;
  const { editFood, clearCurrent, current } = foodContext;

  const [food, setFood] = useState({
    foodName: '',
    edible: null,
    edibleDetails: '',
    foodDetails: '',
    imgUrl: ''
  });

  const { foodName, edible, edibleDetails, foodDetails, imgUrl } = food;

  useEffect(() => {
    if (current !== null) {
      setFood(current);
    } else {
      setFood({
        foodName: '',
        edible: 0,
        edibleDetails: '',
        foodDetails: '',
        imgUrl: ''
      });
    }
  }, [foodContext, current]);

  const onSubmit = e => {
    e.preventDefault();
    if (foodName === '' || foodDetails === '' || edible === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      setAlert(`${food.foodName} was edited successfully.`, 'success');
      editFood(food);
      clearCurrent();
      props.history.push('/');
      setFood({
        foodName: '',
        edible: 0,
        edibleDetails: '',
        foodDetails: '',
        imgUrl: ''
      });
    }
  };

  const onChange = e => setFood({ ...food, [e.target.name]: e.target.value });

  return (
    <Fragment>
      {!current ? (
        <h2>No food selected</h2>
      ) : (
        <Fragment>
          <h1>{foodName} is selected</h1>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Current;

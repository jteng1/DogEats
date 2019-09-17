import React, { Fragment, useState, useContext, useEffect } from 'react';

import AlertContext from '../../context/alert/alertContext';
import FoodContext from '../../context/food/foodContext';

const Edit = () => {
  const alertContext = useContext(AlertContext);
  const foodContext = useContext(FoodContext);

  const { setAlert } = alertContext;
  const { editFood, current } = foodContext;

  return (
    <Fragment>
      <h1>Edit Page</h1>
      {!current ? (
        <h2>Current is not set</h2>
      ) : (
        <h2>Current is set to {current.foodName}</h2>
      )}
    </Fragment>
  );
};

export default Edit;

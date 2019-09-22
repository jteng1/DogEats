import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import FoodContext from '../../context/food/foodContext';

const Current = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const foodContext = useContext(FoodContext);

  const { admin } = authContext;
  const { setAlert } = alertContext;
  const { deleteFood, current } = foodContext;

  const [food, setFood] = useState({
    foodName: '',
    edible: null,
    edibleDetails: '',
    foodDetails: '',
    imgUrl: ''
  });

  const { _id, foodName, edible, edibleDetails, foodDetails, imgUrl } = food;

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

  const onDelete = () => {
    props.history.push('/');
    deleteFood(_id);
    setAlert(`${foodName} deleted successfully`, 'success');
  };

  const handleClick = e => {
    props.history.push('/');
  };

  const adminButtons = (
    <Fragment>
      <button className='btn btn-danger btn-sm' onClick={onDelete}>
        Delete
      </button>
      <Link to='/edit'>
        <button className='btn btn-light btn-sm'>Edit</button>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      {!current ? (
        <h2>No food selected</h2>
      ) : (
        <Fragment>
          <button className='btn btn-light btn-block' onClick={handleClick}>
            Go Back
          </button>
          <h2 className='text-primary'>{foodName}</h2>
          {admin ? adminButtons : ''}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Current;

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

  let edibleIcon;

  switch (edible) {
    case 0:
      edibleIcon = (
        <i
          style={{ color: '#cc2121' }}
          className='fas fa-skull-crossbones x-large'
        />
      );
      break;
    case 1:
      edibleIcon = (
        <i
          style={{ color: '#45e630' }}
          className='fas fa-check-circle x-large'
        />
      );
      break;
    case 2:
      edibleIcon = (
        <i
          style={{ color: '#e6cd12' }}
          className='fas fa-exclamation-triangle x-large'
        />
      );
      break;
    default:
      edibleIcon = <i className='fas fa-question' />;
  }

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
    <div className='admin-buttons'>
      <Link to='/edit'>
        <button className='btn btn-primary btn-block'>Edit</button>
      </Link>
      <button className='btn btn-danger btn-block' onClick={onDelete}>
        Delete
      </button>
    </div>
  );

  return (
    <Fragment>
      {!current ? (
        <h2>No food selected</h2>
      ) : (
        <div>
          <button className='btn btn-light btn-block' onClick={handleClick}>
            Go Back
          </button>
          <div className='card text-center p-1 shadow'>
            <h1 className='text-primary m-1'>{foodName}</h1>
            {edibleIcon}
            <p className='text-dark secondary-card '>{edibleDetails}</p>
            <p className='text-dark secondary-card text-left'>{foodDetails}</p>
          </div>

          {admin ? adminButtons : ''}
        </div>
      )}
    </Fragment>
  );
};

export default Current;

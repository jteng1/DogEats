import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AlertContext from '../../context/alert/alertContext';
import FoodContext from '../../context/food/foodContext';

const FoodItem = ({ food }) => {
  const alertContext = useContext(AlertContext);
  const foodContext = useContext(FoodContext);

  const { setAlert } = alertContext;
  const { deleteFood, setCurrent } = foodContext;

  const { _id, foodName, edible, edibleDetails, foodDetails } = food;

  let bgStyle;

  const onDelete = () => {
    deleteFood(_id);
    setAlert(`${foodName} deleted successfully`, 'success');
  };
  const makeCurrent = () => {
    setCurrent(food);
  };

  switch (edible) {
    case 0:
      bgStyle = {
        backgroundColor: '#dc3545'
      };
      break;
    case 1:
      bgStyle = {
        backgroundColor: '#28a745'
      };
      break;
    case 2:
      bgStyle = {
        backgroundColor: '#ebeb34'
      };
      break;
    default:
      bgStyle = {
        backgroundColor: '#fff'
      };
  }
  return (
    <div style={bgStyle} className='card text-center'>
      <Link to='/current'>
        <h2 className='text-dark' onClick={makeCurrent}>
          {foodName}
        </h2>
      </Link>
      {/* <p>{edibleDetails}</p>
      <p>{foodDetails}</p>
      <button className='btn btn-danger btn-sm' onClick={onDelete}>
        Delete
      </button>
      <Link to='/edit'>
        <button className='btn btn-light btn-sm' onClick={onEdit}>
          Edit
        </button>
      </Link> */}
    </div>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired
};

export default FoodItem;

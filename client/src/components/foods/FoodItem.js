import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../../context/food/foodContext';

const FoodItem = ({ food }) => {
  const foodContext = useContext(FoodContext);
  const { deleteFood } = foodContext;

  const { _id, foodName, edible, edibleDetails, foodDetails } = food;

  let bgStyle;

  const onDelete = () => {
    deleteFood(_id);
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
      <h1>{foodName}</h1>
      <p>{edibleDetails}</p>
      <p>{foodDetails}</p>
      <button className='btn btn-danger btn-sm' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired
};

export default FoodItem;

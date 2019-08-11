const express = require('express');
const router = express.Router();

const Food = require('../models/Food');

// @route       GET api/foods
// @desc        Get all foods
// @access      Public
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find({});

    res.json(foods);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/foods/:id
// @desc        Get a specific food
// @access      Public
router.get('/:id', async (req, res) => {
  try {
    let food = await Food.findById(req.params.id);

    if (!food) return res.status(404).json({ msg: 'Food not found' });

    res.json(food);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/foods/add
// @desc        Add a food to the list
// @access      Public
router.post('/add', async (req, res) => {
  const { foodName, edible, edibleDetails, foodDetails, imgUrl } = req.body;
  try {
    const newFood = new Food({
      foodName,
      edible,
      edibleDetails,
      foodDetails,
      imgUrl
    });

    const food = await newFood.save();
    res.json(food);
  } catch (err) {}
});

// @route       PUT api/foods/:id
// @desc        Update a food
// @access      Public
router.put('/:id', async (req, res) => {
  const { foodName, edible, edibleDetails, foodDetails, imgUrl } = req.body;

  // Build food object
  const foodFields = {};
  if (foodName) foodFields.foodName = foodName;
  if (edible) foodFields.edible = edible;
  if (edibleDetails) foodFields.edibleDetails = edibleDetails;
  if (foodDetails) foodFields.foodDetails = foodDetails;
  if (imgUrl) foodFields.imgUrl = imgUrl;

  try {
    let food = await Food.findById(req.params.id);

    // Check if the food exists in the database
    if (!food) return res.status(404).json({ msg: 'Food is not found' });

    // If food exists then update it
    food = await Food.findByIdAndUpdate(
      req.params.id,
      { $set: foodFields },
      { new: true }
    );

    res.json(food);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/foods/:id
// @desc        Delete a food
// @access      Public
router.delete('/:id', async (req, res) => {
  try {
    let food = await Food.findById(req.params.id);

    if (!food) return res.status(404).json({ msg: 'Food not found' });

    await Food.findByIdAndRemove(req.params.id);

    res.json({ msg: `${food.foodName} was removed` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

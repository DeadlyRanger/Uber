 const express = require('express');
 const router = express.Router ();
const  {body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register',[ 
  body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
    body('fullname.firstname').isLength({min:3}).withMessage('Name must be atleast 3 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle']).withMessage('Invalid vehicle type')


],
 captainController.registerCaptain);





 module.exports = router;
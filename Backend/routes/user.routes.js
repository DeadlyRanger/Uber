const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Name must be atleast 3 characters'),
    body('password').isLength({min:5}).withMessage('Password must be atleast 5 characters')
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:5}).withMessage('Password must be atleast 5 characters')

],
 userController.loginUser
);


router.get('/profile',authMiddleware.authUser ,userController.getUserProfile);



router.get('/logout',authMiddleware.authUser ,userController.logoutUser);

module.exports = router;
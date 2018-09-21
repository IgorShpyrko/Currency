const express = require('express');
const Router = express.Router();
const HomeController = require('@controllers/HomeController');
const HomeMiddleware = require('../app/Middlewares/HomeMiddleware');


Router.get('/',  HomeController.home);
// Router.post('/', HomeMiddleware.home, HomeController.post);

module.exports = Router;
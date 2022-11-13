//importing  express;
const express = require('express');


//initializing router;
const router = express.Router();

//importing get controllers;
const {
    getController,
} = require('../controllers/get.controller');

//importing post controllers;
const {
    postStkController,
} = require('../controllers/post.controller');


//importing  token middleware;
const {
    tokenMiddleware,
} = require('../middleware/token.middle');


//creating routes;

//get routes;
router.get('/get', getController);


//post routes;
router.post('/stk', tokenMiddleware, postStkController);




//exporting router;
module.exports = {
    router,
}
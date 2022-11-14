const express = require('express');
const PORT = 8000;
const bodyParser = require('body-parser');
const cors = require('cors');

//initializing app;
const app = express();

//middleware;
app.use(cors());
app.use(bodyParser.json());

//importing router;
const {
    router
} = require('./routes/get.route');


//application routes;
app.use('/shop', router);



//connecting to the server;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(`App connected through port ${PORT}`);
    }
});
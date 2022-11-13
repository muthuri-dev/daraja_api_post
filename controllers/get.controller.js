//get controller route;

const getController = (req, res) => {
    res.send('get route');
}


//exporting controllers;

module.exports = {
    getController,
}
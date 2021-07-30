const express = require('express');
const flightdataController = require('../../controllers/flightdata.controller');

const router = express.Router();

router.route('/getFlights').get(flightdataController.getFlights);

module.exports = router;
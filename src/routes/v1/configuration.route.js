const express = require('express');
const configurationController = require('../../controllers/configuration.controller');

const router = express.Router();

router.route('/getCountries').get(configurationController.getCountries);


module.exports = router;
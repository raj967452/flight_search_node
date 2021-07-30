const express = require('express');
const configurationRoute = require('./configuration.route');
const flightdataRoute = require('./flightdata.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/configuration',
        route: configurationRoute,
    },
    {
        path: '/flightdata',
        route: flightdataRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
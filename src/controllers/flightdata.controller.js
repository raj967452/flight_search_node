const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { flightService } = require('../services');


const getFlights = catchAsync(async (req, res) => {
    const data = await flightService.getFlightsData();
    if (!data) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Not able to fetch flight data');
    }
    res.send(data);
});


module.exports = {
    getFlights
};
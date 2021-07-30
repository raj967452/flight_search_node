const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { configService } = require('../services');


const getCountries = catchAsync(async (req, res) => {
    const data = await configService.getCountryData();
    if (!data) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Not able to fetch country data');
    }
    res.send(data);
});


module.exports = {
    getCountries
};
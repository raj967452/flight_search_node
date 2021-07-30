const httpStatus = require('http-status');
const path = require('path');
const fs = require('fs');

const ApiError = require('../utils/ApiError');

const basePathToData = path.join(__dirname, '../data/');

const getFlightsData = async () => {
    const filename = path.join(basePathToData, 'flights.json');
    const response = fs.readFileSync(filename, 'utf-8');
    if (!response) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Frtching error');
    }
    return response;
};

module.exports = {
    getFlightsData
};
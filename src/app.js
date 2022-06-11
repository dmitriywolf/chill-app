const express = require('express');
const tourRouter = require('./routers/tourRouter/tourRouter');

const app = express();

const jsonParser = express.json();
app.use(jsonParser);

app.use('/api/tours', tourRouter);

module.exports = app;

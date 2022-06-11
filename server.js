const express = require('express');
const fs = require('fs');

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

const content = fs.readFileSync(`${__dirname}/mock/tours.json`, 'utf8');

app.get('/api/tours/', (req, res) => {
  try {
    const tours = JSON.parse(content);
    res.status(200).json({
      status: 'success',
      count: tours.length,
      data: { tours },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: err,
    });
  }
});

app.get('/api/tours/:id', (req, res) => {
  const { id } = req.params;
  const tours = JSON.parse(content);

  let tour = null;
  for (let i = 0; i < tours.length; i += 1) {
    if (tours[i].id === Number(id)) {
      tour = tours[i];
      break;
    }
  }
  if (tour) {
    res.status(200).json({
      status: 'success',
      data: { tour },
    });
  } else {
    res.status(404).json({
      status: 'Fail',
      message: 'Not found',
    });
  }
});

app.post('/api/tours/', (req, res) => {
  try {
    const tours = JSON.parse(content);
    const arrIds = tours.map((item) => item.id);
    const maxId = Math.max.apply(null, arrIds);
    const newTour = { id: maxId + 1, ...req.body };

    tours.push(newTour);

    const data = JSON.stringify(tours);

    fs.writeFileSync(`${__dirname}/mock/tours.json`, data);

    res.status(201).json({ status: 'success', data: { tour: newTour } });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
});

app.put('/api/tours/:id', (req, res) => {
  try {
    const { id } = req.params;
    const tours = JSON.parse(content);
    const tourIdx = tours.findIndex((item) => item.id === Number(id));

    const updatedTour = { id: Number(id), ...req.body };

    tours.splice(tourIdx, 1, { id: Number(id), ...req.body });

    const data = JSON.stringify(tours);

    fs.writeFileSync(`${__dirname}/mock/tours.json`, data);

    res.status(200).json({
      status: 'success',
      data: { tour: updatedTour },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
});

app.delete('/api/tours/:id', (req, res) => {
  try {
    const { id } = req.params;
    const tours = JSON.parse(content);
    const newTours = JSON.stringify(
      tours.filter((item) => item.id !== Number(id))
    );
    fs.writeFileSync(`${__dirname}/mock/tours.json`, newTours);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: err,
    });
  }
});

app.listen(3000, 'localhost', () => console.log('Server started'));

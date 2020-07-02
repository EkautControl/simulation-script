const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendToQueue = require('./send');
const { appPort } = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.route('/temperature').post((req, res) => {
  try {
    const { tank, temperature } = req.body;
    const tanksObject = {};
    tanksObject[tank] = temperature;
    sendToQueue(JSON.stringify(tanksObject));
    res.status(200).send(JSON.stringify(tanksObject));
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(appPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${appPort}`);
});

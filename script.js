const getTemperatures = require('./getTemp');
const sendToQueue = require('./send');

function send() {
  const temps = getTemperatures();

  sendToQueue(JSON.stringify(temps));
}

send();

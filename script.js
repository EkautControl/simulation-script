const getTemperatures = require('./getTemp');
const sendToQueue = require('./send');

function send() {
  const temps = getTemperatures();

  sendToQueue(JSON.stringify(temps));

  setTimeout(send, 2000 * 60);
}

send();

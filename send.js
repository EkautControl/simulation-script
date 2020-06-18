const amqp = require('amqplib/callback_api');
require('dotenv');

function sendToQueue(msg) {
  amqp.connect(process.env.CLOUDAMQP_URL, (error0, connection) => {
    if (error0) {
      throw error0;
    }
    connection.createChannel((error1, channel) => {
      if (error1) {
        throw error1;
      }
      const queue = 'temperature_queue';

      channel.assertQueue(queue, {
        durable: true
      });

      channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true
      });

      setTimeout(() => {
        connection.close();
      }, 500);

      console.log(" [x] Sent '%s'", msg);
    });
  });
}

module.exports = sendToQueue;

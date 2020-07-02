require('dotenv').config();

module.exports = {
  appPort: process.env.PORT,
  amqpUrl: process.env.CLOUDAMQP_URL,
};

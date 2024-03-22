const schedule = require('node-schedule');
const connection = require('../Config/db')

const job = schedule.scheduleJob('0 */12 * * *', function () {
   
});
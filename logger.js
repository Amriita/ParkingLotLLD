const fs = require('fs');

const logs = [];

const log = (message) => {
  console.log(message);
  logs.push(typeof message === 'string' ? message : JSON.stringify(message));
};

const saveLogsToFile = () => {
  fs.writeFileSync('./logs/response.json', JSON.stringify({ logs }, null, 2));
  console.log('✅ File written successfully.');
};

module.exports = { log, saveLogsToFile };
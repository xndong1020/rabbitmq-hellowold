const getConnection = require('./connection');
const publish = require('./publish');
const chalk = require('chalk');

const init = async () => {
  const msg = process.argv[2]
  console.log('msg', chalk.green(msg))
  const conn = await getConnection()
  await publish(conn, msg)
  // allow some time for message to be saved into queue
  setTimeout(() => {
    process.exit(0)
  }, 1000)
}

init()
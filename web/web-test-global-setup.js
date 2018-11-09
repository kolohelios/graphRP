const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `node ./fuse.js test`,
    launchTimeout: 50000,
    port: 4444,
  })
}

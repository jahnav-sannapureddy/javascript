const bunyan = require('bunyan')
const log = bunyan.createLogger({
    name: 'myapplication',
})

log.info("Hello: ");
```console

npm i bunyan

node index.js

node .\index.js | ./node_modules/.bin/bunyan -j

```

```js

const bunyan = require('bunyan')
const log = bunyan.createLogger({
    name: 'myapplication',
})

log.info("Hello: ");

```
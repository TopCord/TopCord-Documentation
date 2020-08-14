# Libraries

This is the page for TopCord's community made libraries!

## Javascript 

**TCAPI.JS**

[GitHub](https://github.com/Misly16/TCAPI.JS)
```js
const TCAPI = require('tcapi.js');
const tcapi = new TCAPI('tcapi-token', 'clientid', guildcount, shardcount-optional);

tcapi.on('success', () => {
  console.log('Your bots stats have been posted');
});

tcapi.on('error', (e) => {
  console.log(`Error: ${e}`);
});
```


#### How to submit a library?
To submit a library dm a site admin on Discord.

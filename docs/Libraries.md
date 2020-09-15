# Libraries

This is the page for TopCord's community made libraries!

## Javascript 

**TCAPI.JS**

[GitHub](https://github.com/Misly16/TCAPI.JS)

Posting Stats
```js
const TCAPI = require('tcapi.js');
const tcapi = new TCAPI('tcapi_token',{}, client);

tcapi.on('success', () => {
  console.log('Your bots stats have been posted');
});

tcapi.on('error', (e) => {
  console.log(`Error: ${e}`);
});
```

Receiving Votes
```js
const TCAPI = require('tcapi.js');
const tcapi = new TCAPI('tcapi_token', {port: 5000});

tcapi.webhook.on('listening', (info) => {
  console.log(`Listening on port: ${info.port} and on path: ${info.path}`);
});

tcapi.webhook.on('vote', (info) => {
  console.log(`${info.userID} voted at ${info.date}`);
});

```

| Parameter     | Type          | Required  |
| ------------- |:-------------:| ---------:|
| token         | String        |   Yes     |
| options       | Object        |   No      |
| options.port  | Number        |   No      |
| options.path  | String        |   No      |
| client        | Discord Client|   No      |


## Python 

**TopCord**

[GitHub](https://github.com/MrStretchd/TopCord)
```py
from TopCord import TopXyz

TopCord = TopXyz(token=token_here, bot_id=bot_id)

#Update stats
Update = TopCord.Update(guild_count=guild_count, shard_count=optional_shard_count)

#Get stats

Stats = TopCord.GetStats()#Returns a dictionary
```


#### How to submit a library?
To submit a library dm a site admin on Discord.


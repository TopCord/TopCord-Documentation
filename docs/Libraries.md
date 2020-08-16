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


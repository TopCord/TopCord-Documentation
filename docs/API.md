# API

This is the page for TopCord's Rest API.

### Reference Guide

- **Base URL:** https://topcord.xyz/api
- **API Token:** This can be obtained at your bots edit page.

### Authentication

Some paths in the API require you to set the `authorization` in the header with the **API Token**.

### Libraries

Any TopCord libraries can be found [Here](https://docs.topcord.xyz/#/Libraries).

The [BotBlock](https://botblock.org/api/docs/libs) libraries are also compatible but wont work with receiving votes from the API.

#### Receive Votes

- **Method:** POST
- **Path:** `N/A`
- **Authentication:** N/A
- **Info:** You can receive a post request when a user votes by setting a Webhook URL in your bots edit page. The recommended way of doing this is using our  [libraries](https://docs.topcord.xyz/#/Libraries).

**Body:**

```js
{
    "id": 0,
    "date": "xyz"
}
```

### Endpoints

#### Get information about a bot

- **Method:** GET
- **Path:** `/bot/<bot id here>`
- **Authentication:** Not Required

**Success Response(200):**

```js
{
    "username": "My Username" // string
    "discriminator": "0000" // string
    "avatar" "d1223c1a3f724470f901a25150de41a7" // String
    "prefix": "-" // string
    "library": "eris" // string
    "shortDescription": "i am a bot" // string
    "inviteURL": "https://<invite url here>" // string
    "supportServerURL": "https://discord.gg/invite" // string
    "websiteURL": "https://topcord.xyz" // string
    "tags": ["fun", "moderation"] // array || string
    "statistics": {
        "votes": 0, // integer
        "servers": 0, // integer
        "shards": 0 // integer
    }
}
```


**Failure Response(404):**

```js
{
    "message": "Not Found"
}
```

#### Set Bot Statistics

- **Method:** POST
- **Path:** `/bot/stats/:id`
- **Authentication:** Required

**Example Body:**

```js
{
    "guilds": 0,
    "shards": 0
}
```

**Success Response(200):**

```js
{
    "message": "Bot Updated"
}
```

**Failure Response:**

```js
// 404
{
    "message": "Not Found"
}

// 401
{
    "message": "Unauthorized or Incorrect Token"
}

// 422
{
    "message": "Incorrect Parameter"
}
```

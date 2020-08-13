# TopCord Bot

### Commands

#### -queue

Get the queue from the unverified database. (Staff Only)

- **Usage:** `-queue`

**Output:**

```
Input: -queue
Output: Embed
run ``-viewbot <bot id here>`` to check details on the bot.
```

#### -viewbot

View some information about the bot.

- **Usage:** `-viewbot <bot id here>`

**Output:**

```
Input: -viewbot <bot id here>
Output: Paginated Embed.
```

#### -deny

Deny a bot. (Staff Only)

- **Usage:** `-deny <bot id here> <reason || 0 for improper description || 1 for not allowed in ToS || 2 for innappropriate || 3 for URLs invalid/not working || 4 for not enough features>`

**Output:**

```
Input: -deny <bot id here> this is a test
Output: Bot <bot username here>(<bot id here>) has been denied with the reason: this is a test
```

#### -approve

Approve a bot. (Staff Only)

- **Usage:** `-approve <bot id here>`

**Output:**

```
Input: -approve <bot id here>
Output: Bot <bot username here> (<bot id here>) has been approved! Yay!
```

#### -delete
Delete a bot from the bot list. (Staff Only)

- **Usage:** `-delete <mention bot> <reason>`

```
input: -delete <mention bot> <reason>
Output: Deleted user#1234 from the bot list.
```

#### -kick
Kick a user from the server. (Staff Only)

- **Usage:** `-kick <mention user> <reason>`

```
input: -kick <mention user> <reason>
output: Kicked user#1234 from the server.
```

#### -ban
Ban a user from the server. (Staff Only)

- **Usage:** `-ban <mention user> <reason>`

```
input: -ban <mention user> <reason>
output: Banned user#1234 from the server.
```

#### -clear

- **Usage:** `-clear <amount>`

```
input: -clear <amount>
output: None
```

#### -commonprefix
Gives a bot the common prefix role. (Staff Only)
- **Usage:** `-commonprefix <bot_id>`

```
input: -commonprefix <bot_id>
output: bot#0000 has been given common prefix role!
```

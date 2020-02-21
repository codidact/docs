# Where's the business logic?

## Will we keep the business logic in the front-end or back-end?

### What's business logic?

[Business logic](https://en.wikipedia.org/wiki/Business_logic) are the rules and algorithms etc. dealing with the data (e.g. storage and creation).

### Result:

The business logic will be in the back-end

### Reasons:

Could end up with multiple front-end clients, which could follow different rules, while we want all front-end clients to follow the same rules as we don't want e.g. people to make use of privileges they shouldn't have access to.

As we're not using a SPA (Single Page Application; see the SPA FAQ), nearly everything is determined by the back-end. While there will be some dynamic content, each page provided by the back-end will include everything necessary for the front-end.

In case e.g. someone tries to cheat the system or has their permissions changed, permissions need to be checked on every submission anyway. This is especially true as we're open source, so other people could recreate and misuse the interface easily and server-side validation means better security.

### Conversation link
[Discord 1 (#team-general, 2020-02-21)](https://discordapp.com/channels/634104110131445811/668890340199235613/680459930180124682)

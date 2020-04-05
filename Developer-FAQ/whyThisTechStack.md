# Why are we using C# and ASP.NET Core?
## what tech stack are we using and why?

### summaries:

#### Discord 1 (ideas, 17/10/19):
https://discordapp.com/channels/634104110131445811/634105527495819281/634311494917685278


- Django, flask, jquery, UIkit ('lightweight') and nodeJS mentioned
- Would like something 'proven' and 'well established'
- dynamic untyped Ruby or Python not great long term. Harder to manage over long periods of time, at scale, or large teams.
- C#/.NET core good choice but unsure about its open source ecosystem.
- Go is well optimized for web services.
- TypeScript - lots of potential contributors as JavaScript is the most popular language. Maybe not as robust as some but perhaps a good balance. If you do choose to do SPA than Typescript becomes an even better choice, for ease of code reuse and server side rendering.

#### Discord 2 (ideas, 17/10/19):

- postgres mentioned for DB, compatible with SO "because that's what they use for enterprise"
- SQLite "not very good for larger projects"
- wouldn't use mangoDB

#### Discord 3 (programming general):
https://discordapp.com/channels/634104110131445811/634374616646811648/634443563710545930

- Python fine for prototyping, not great for large systems (neither is Ruby)
- Need compiled, statically typed code for reliability and performance
- SO runs ASP.NET C#, Microsoft SQL Server, queries through Linq to SQL. Front end is Razor Pages, if I'm not with custom JS and Jquery as needed (works very well, so no point in fixing what ain't broken - "picked up by clever people after a lot of consideration")

In order to reduce server costs:

- ASP.Net Core (C#)
- Entity Framework 6.3 (in the near future, Entity Framework Core, if it works well enough and support seamless many-to-many relationships as well as a few other pain points that I'm unhappy with right now)
- MariaDB as the RDBMS, even though I do prefer Microsoft SQL Server, it is unfortunately expensive
- At some point, optimize critical points with MongoDB, ElasticSearch or similar.

Not:
- PHP
- NodeJS:
  - is easy for people who know JS
  - ex SO employee says "ASP.NET core is clearly a better platform"
  - not lightweight
  - gorilla, monkey, banana, jungle problem
  - javascript
  - easy to write quick software; hard to write professional, maintainable, scalable software
  - https://www.netguru.com/blog/pros-cons-use-node.js-backend (outdated)
  - a lot of basic stuff has to be rewritten for lots of traffic
- React, Angular, -some other fancy, "no true HTML" JS framework

[argument about nodeJS being "non-blocking and event driven" making it "perfect" for SPA - e.g. async/await can be used in C# for non-blocking programming (can be done in 'virtually any' language) and the argument is that it's not relevant for a frontend process such as SPA]

# Why not one database to rule them all?

### reasons:
#### Discourse 1 (software development/'How do we separate distinct communities?'', 2019-10-17):
https://forum.codidact.org/t/how-do-we-separate-distinct-communities/138?u=mithrandir24601

##### Aims and approach

SO/SE started off not planning to be a network, so uses 2 databases per community (1 for main, 1 for meta) and an extra 2 special databases - [stackexchange.com](stackexchange.com) and cross-site data. For SO Teams, they use multiple schema within one database. They used Object Relational Mapping (ORM) but spent years getting rid of it, as they felt it was a mistake. As they're aiming for performance, they use a _lot_ of caching (for nearly everything except the questions and answers). While the aim is to grow at least as big as SE, we want to create our own thing, so while it may be useful to think/model ourselves with SE levels of communities and data, we're _not_ aiming to recreate SE. We can however, learn from what they did right and what they did wrong. To quote Skilvyz, "By assuming to know stuff all we can obtain is forcing a pre-made idea from the start instead of building something small and easy to adapt to whatever actual, not imaginary, challenge we will face in the future." That is, we want to start with the _Minimum Viable Product_ and learn from how it grows to implement what is best for the product, instead of forcing our views on it from the start, constricting it to be something worse than what it could be. In that vein, network features only become necessary once we _have_ a network and different potential usage scenarios come up with different possible database structure optimisations.

##### Requirements

So far, we've thought about the data licensing under which posts are created and are making the software open source. As we're aiming for community ownership, we want both a policy based on our Code of Conduct to give reasonable limits of what a community can and cannot do. We also want a good amount of customisation possible and an easy way for a community to leave with all their (non-PII) data.

It's essential that sensitive data/PII be kept separate from the public data, so this should be done on a single separate database serving all communities. Authentication etc. shouldn't rely on 3rd party login services and should be done by a separate module.

We would like to have some form of integration between sites and potentially even instances (in the long run) and some way for users to access network profiles, which could contain questions from sites they visit, notifications etc. (similar to a user's network profile). On the other hand, few users want to be a user on every site and a number actively don't want this. So, we want an easy way for users to join new sites without automatically joining them to all sites.

There will be a _lot_ of data and a lot of tables as virtually everything (e.g. votes, edits etc.) will need to be permanently saved in detail. Storage and RAM are cheap, so this should be fine from a cost perspective. In order to have good performance, we need to ensure that the right data is in the right place for easiest access. Having said that, it might turn out that we'll find a better way of storing everything after MVP, so the database structure will likely change at some point. The most common data access will be to look at question pages, so this needs to be heavily optimised and we want to minimise the number of queries made to a reasonable minimum, although it will be more than one per page. A Stored Procedure (sproc) will help with this as it has a smaller overhead. Having separate tables for questions and answers may also help with performance as while PostgreSQL has methods to help with performance of large tables, these methods can add extra complexity to the code and we want to keep things as simple as possible for as long as possible.

##### Options

- 1 instance per community
- 1 database per community
- 1 schema per community
  - a lot of people have different definitions of 'schema', so what this means is complicated to figure out sometimes
  - here, something like 'multiple copies of the database design/structure (containing different data) but all contained within a single database'
- each table has a 'community' field, so there is 1 database for all communities combined
- multiple databases with multiple communities in each

In addition, there will be a separate database for PII etc.

##### Advantages and disadvantages

Each community having its own instance is a possibility as this allows for a lot of flexibility with each community. It also allows for eacy spreading over multiple servers in multiple locations and we wouldn't need to worry about how to deal with communities 'splitting off'. However, that's because this _is_ having communities split off and everything is very separated. This might end up happening naturally to some extent in the future (e.g. SO, Meta SE and the SE Network are all fairly separated and we want communities to be free to make this decision themselves).

Having a single database per community allows for better optimisation of non-network queries, which are going to be the most frequent queries by far. Cross-site queries would have to be done by middleware/APIs, although will be much rarer than regular ('within-site') queries. This is nevertheless within the constraints of Codidact, although outside the constraints of the Codidact 'core' repository. Middleware would also be required for user profile management and question migrations. The extra database for PII can be used throughout the network and any changes to the database design or high level moderation can be scripted. In particular, this allows for canary release to minimise problems caused by new software versions and limits the damage caused by potential 'disaster events'.

Using a single schema per community makes the communities less isolated than a single database per community and makes for more easily implement cross-community queries. Although regular queries are still fast, PostgreSQL would struggle to cope with the sheer number of tables at SE scale making these cross-community queries potentially slow at scale. It's also less secure and would need to be able to cope with huge numbers of concurrent connections. As a result, this method would be difficult to scale well.

A community in each table would require fewer tables and allow for easier network usage and moderation but would also be [difficult to implement](https://github.com/codidact/core/blob/ranolfi/skeleton/Database/Diagrams/png/Main%20DB%20Model.png), would run into issues with concurrent connections and volume of queries and would simply get too big at scale, meaning either difficult to implement methods to deal with massive databases would have to be used, or we'd have to split the database anyway. While it would create a more 'linked' network, allowing for easier migrations and easier network moderation, this would also lead to corresponding issues, such as it being harder to perform maintenance on individual communities and making it harder for individual communities to start their own instance.

Having multiple databases with multiple communities in each would scale much better than having a single table but as cross-site queries would still require work to be done across databases, this solution is no easier than having a single community per database.

##### Resources

- [how SE works](https://www.youtube.com/results?search_query=marco+ceconni+stack+overflow)
- [stackexchange.com](stackexchange.com) 'Network site'
- Sklivyz's tool for [database migrations](https://github.com/intelligenthack/badgie-migrator)
- [explanation of canary release](https://martinfowler.com/bliki/CanaryRelease.html)

##### **Decision** made on the 4th February:
- each community to have its own database, without PII
- Account management will have PII and be a separate service
- instance database and service hopefully without PII

### summaries:

#### Discord 1 (ideas, 2019-10-17):
https://discordapp.com/channels/634104110131445811/634105527495819281/634389524754989138

- 1 DB shared between all sites doesn't scale
- using schemas 'considered better' than one big table

#### Discourse 1 (software development/'How do we separate distinct communities?'', 2019-10-17):
https://forum.codidact.org/t/how-do-we-separate-distinct-communities/138?u=mithrandir24601

- Options:
  - 1 instance per community
    - Can have one instance over multiple servers
    - system as a whole can adapt, independent of any specific community
  - 1 database per community.
    - Can have faster queries for huge databases
    - hard to create cross-site queries
      - much rarer than regular queries
      - can be done by middleware/APIs
    - User Profile management is harder
    - High-level Moderation (e.g., User “bans”) is harder
    - Question migrations are harder
    - Splitting or Merging Communities is harder
    - Cross-community queries are harder
    - structural changes have to be performed multiple times
      - can be scripted
    - recommended for more separate projects
    - can be moved to different locations
    - impact of 'disaster events' is limited, although PII will all be in one place
    - [how SE works](https://www.youtube.com/results?search_query=marco+ceconni+stack+overflow) (for historical reasons)
      - SE uses 2 databases per community - 1 main, 1 meta
      - Also has 2 special databases - [stackexchange.com](stackexchange.com) and cross-site data
      - allows for canary release (rolling changes one database at a time)
  - 1 schema per community
    - less isolated than 1 database per community
    - less secure than 1 database per community
    - can't take down clusters of the site as easily
    - recommended for less separate projects
    - supposed to be used to separate different tables into different logical groups
    - tables with same column definitions should be the same table so they don't diverge
    - fast queries within each community
    - moderate difficulty for cross-community queries
    - too many tables for PostgreSQL to cope with at scale
  - use a community field in each table (see also 'site tags')
    - performance hit of MVP is small
    - might be quicker to develop
    - arguments against site tags e.g. controversial topics on religion
    - doesn't scale - if database gets too big, it will _have_ to be split anyway
    - not much difference (factor of ~2) between biggest community and everything else put together anyway
    - harder to perform maintenance on individual communities
    - easier migration
    - easier network moderation
    - network is more 'lnked' e.g. user's page of questions
    - execution plan caching wouldn't cope with volume of queries
    - could have problems with volume of concurrent connections
    - few tables
    - easier queries
    - always in sync
    - network profiles require less complex code
    - [difficult to implement](https://github.com/codidact/core/blob/ranolfi/skeleton/Database/Diagrams/png/Main%20DB%20Model.png)
  - each question linked to a community, everything relevant linked to questions
    - tags could be a problem
  - multiple databases with multiple communities in each
    - communities can be split off as and when desired
    - 1 master database, a few 'content' databases
    - scales much better
    - still have cross-database difficulties
- backup not an issue on Amazon Web Services (AWS) etc.
- SO teams uses separate schemas
- sensitive and public data should be kept separate
  - ASP.NET Core can do this by e.g. using different databases with different rules
  - Shouldn't rely on 3rd party login services
  - one sensitive database for all communities combined
  - authentication etc. will be done by a separate module
- could also have a separate 'identity database' (not the same as user profiles) [note: unsure of meaning of 'identity database']
- Object Relational Mapping (ORM) could be useful
  - can hide complexity/abstraction
    - can hurt performance - testing etc. more important
  - make database migrations easier & more reliable
  - prevent 'stupid mistakes' when writing SQL
  - Would need a consensus
  - was a mistake to use on SE
- virtually everything (e.g. votes, edits etc.) needs to be permanently saved in detail
- will have a lot of tables
- Storage, RAM are cheap
- access is fast
- need right data in right place
- will likely be changes to DB design after MVP
- should use e.g. a stored procedure (sproc) to access data for question pages etc.
  - smaller overhead
  - will have more than a single query per page, but want to minimise the number to a reasonable amount
- Could have separate tables for questions and answers for performance reasons
  - PostgreSQL has methods (e.g. partitioning) to help performance
    - single table would probably be better
    - partitioning is complex
- aiming for being (at least as) big as SE & SO
  - could model how long we could sustain performance for, growing at the scale of SE & SO
  - also want something easy/minimal amount of work to start with
- Would (eventually) like integration between instances (i.e. not necessarily hosted by the same organisation)
- joining extra sites can be confusing and unintuitive without an upfront explanation of why
  - on SE, this is due to PII access
    - will be different on Codidact
  - not everyone wants to be associated with every site
  - some want true multiple accounts per user (i.e. 'legal' socks)
- testing can be done on a small-scale dev-only instance
- will have a middleware repository/repositories for e.x. management, data querying a la SEDE etc.
- SE uses a lot of caching (for nearly everything except questions and answers) for performance
- would be nice to have a 'combined site' linking to all others, listing e.g. HNQs and notifications for sites that particular user is a member of
- "By assuming to know stuff all we can obtain is forcing a pre-made idea from the start instead of building something small and easy to adapt to whatever actual, not imaginary, challenge we will face in the future."
  - network features are unnecessary until we _have_ a network
  - could have different scenarios requiring different database structures
  - don't recreate SE
- Sklivyz has a tool for [database migrations](https://github.com/intelligenthack/badgie-migrator)
- need to think about data (licensing), software (open source) and community ownership
  - Can a community 'own itself' in a centralised database?
  - need an easy way for a community to leave with all their data if they want to
  - need a policy based on Code of Conduct to get reasonable limits of what each community can/can't do
  - community could customise e.g. landing text
- should be presented with guidelines when writing first post
  - could be enforced by e.g. a quiz (or something more annoying)
  - could start with question closed before getting opened by the community

**decision** on the 4th February:
- each community to have its own database, without PII
- Account management will have PII and be a separate service
- instance database and service hopefully without PII

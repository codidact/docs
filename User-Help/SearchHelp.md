## Codidact search options

While searching on a Codidact site, you have several options to help refine your search and make it easier to find what you're looking for. Searching will search all posts across that site, including Questions, Answers, Meta posts, and whatever other post types your site may have.

**Basic keyword searching**

Let's say you want to search for the term `snake oil`. You have a few basic options:

* plain search

  If you put the text `snake oil` into the searchbox, Codidact will find all posts that contain *either* the word `snake` or `oil`.

* exact search (quote marks)

  If you include quote marks around your search term, such as `"snake oil"`, Codidact will find all posts that contain exactly the phrase `snake oil`.

* keyword search (plus symbol)

  If you search for `+snake +oil`, Codidact will find all posts that contain both the words `snake` and `oil`.

* excluding words (minus symbol)

  If you want to search for `snake` but exclude the word `oil` from your results, you can do a search for `snake -oil`. Codidact will find posts that contain the word `snake` but do not have the word `oil`.

**Filtering by score and age**

It's possible to filter your search to only include results that have been posted within a certain timeframe, or match certain score requirements.

* filtering by Wilson score

  Codidact uses Wilson scoring to help in sorting posts. (To learn more about how this works, see [/help/scoring](/help/scoring) for a detailed explanation.) To use this in search, you can use `score:0.5` to filter your search to only include posts with a Wilson score of at least 0.5.

* filtering by votes

  If you want to filter by the raw votes that a post has, you can use `votes:5` to find posts where the net votes (upvotes minus downvotes) of a post equals 5 or higher.

* filtering by upvotes and downvotes

  If you search for `upvotes:4`, Codidact will find posts that have received at least 4 upvotes, irrespective of how many downvotes the post has. Likewise, if you search for `downvotes:4`, Codidact will find posts that have received at least 4 downvotes without taking upvotes into consideration.

* filtering by creation date

  If you want to only find posts that have been written within a certain timeframe, you can use the `created:` search operator. `created:<1w` will find all posts created less than a week ago, where `created:>1w` will find only posts older than a week. You can use `m` for minute, `h` for hour, `d` for day, `w` for week, `mo` for month, and `y` for year. 

**Advanced**

* wildcard

  If you search with an asterisk (`*`) at the end of a word, such as `snake*`, Codidact will find all posts that contain words beginning with the letters `snake`, including words such as `snakeskin`.

* results for either one of two words

  Searching with parenthes will allow you to search for a keyword, and either one of two other words. For instance, `+oil +(snake palm)` will find posts that contain the word `oil` and either the word `palm` or `snake`.

* weighting keywords

  When searching with multiple keywords, you can weigh different keywords separately. Using a tilda before a word will lower that word's weight, and have Codidact sort results with that keyword more towards the back. For instance, `+snake ~oil` will find all posts that contain the word `snake`, but rank the results that also contain the word `oil` lower.

  If you're searching with parentheses, you can rank words within those parentheses differently. `+snake +(>skin <oil)` will find all posts that contain `snake` and either `skin` or `oil`, but will rank results that contain `skin` higher than the results that contain `oil`.

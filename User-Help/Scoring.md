| URL slug | Category |
|:--------:|:--------:|
| scoring  | Site Information |

# Answer scoring and ordering

## Overview 

On Codidact, answers to questions are sorted by their scores, so that you'll see the best-received answers first. Each answer has a score based on a ratio of upvotes to total votes, weighted to favor posts with fewer downvotes. For example, a post with seven upvotes will be shown higher than a post with nine upvotes and two downvotes. This method gives a slight boost to contributions that are consistently viewed positively over more controversial answers that gather both upvotes and downvotes. 

## Calculations Used

The actual score of a particular post is calculated as 
![(upvote_count + z^2/2)/(upvote_count + downvote_count + z^2)](/assets/scoring_formula.png)

This uses a modified form of a [Wilson Score](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Wilson_score_interval), assuming a binomial distribution. By default the weighting constant _z_ is two, but each community can change this to another value as they see fit. Several charts and graphs showing the default weighting distribution are shown below. 

![table of scores with the values for all upvote and downvote combinations from one to ten](/assets/scoring_table.png)

This table shows the scores for each combination of upvotes and downvotes where _z_ = 2. 

![lines in a cartesian coordinate plane sloping from upper left to lower right and converging as z increases](/assets/scoring_distribution.png)

Diagram showing the distribution in scores where upvotes less downvotes = 3 for different values of z. 

![a 3D diagram showing the score distribution for upvotes and downvotes](/assets/scoring_3d.png)


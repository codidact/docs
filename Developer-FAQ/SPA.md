# To SPA or not to SPA?

### What's a SPA?
['Single Page Application'](https://en.wikipedia.org/wiki/Single-page_application) with a single HTML file where contents are dynamically updated

### Result:
[By vote held on the 2019-10-17](https://discordapp.com/channels/634104110131445811/634469221086003210/634469622690873357) asking "should we build a SPA?", result was 'no' by 7 votes to 2.

That is, the answer is 'not to SPA'

### Reasons:

~80%-90% of Stack Overflow's traffic comes from Google. Client-side rendered SPA isn't great for this.

Lightweight and optimised server-side rendering with HTML isn't much heavier (if it's not lighter) than SPA anyway, considering that most of the page is going to be static.

While there is some amount of interaction, this can be done using e.g. websockets with HTML. While this is, in some sense, partially SPA, it's not the 'full SPA experience'.

SO only uses websockets for a small portion of users (those with >50 rep) as websockets can only handle ~500k open connections, while there can be millions of SO connections open at any given moment. Load balancing helps with this but still gets complicated at larger scales.

Using SPA doesn't solve all the issues of not using SPA anyway, as sessions are still required in the backend for ex. a logged-in user to receive notifications.

Can use isomorphically rendered SPA, which would allow for SEO but would require using some form of JavaScript on the backend, which was strongly opposed (see other FAQs).

### Conversation links

- [Discord 1 (#ideas, 2019-10-17)](https://discordapp.com/channels/634104110131445811/634105527495819281/634390023738884117)
- [Discord 2 (#programming-general, 2019-10-17)](https://discordapp.com/channels/634104110131445811/634374616646811648/634455833400573982)
- [Discord 3 (#general, 2019-10-17)](https://discordapp.com/channels/634104110131445811/634104110131445815/634380444170977285)
- [Discord 4 (#programming-general, 2019-10-17)](https://discordapp.com/channels/634104110131445811/634374616646811648/634470578824413194)

# If you so care to read

I normally wouldn't add a readme for an interview, as I would think we would talk through the code if I was selected for the next round, but I wanted to
give some insight on some of the choices that I made/would have made.

Time snuck up on me on this one as I got pulled away from the exercise without really thinking it would affect me. Not using that as an excuse, but adding clarity to why
I have other things that I would add/refactor that I didn't end up doing.

First, mobile responsiveness. I went ahead and made most of the application responsive, but some areas do lack and I wish I could spend some more time fixing those.

Second, the button click handling isn't the ideal solution as I wanted to have each of the rendered 'views' to be in a separate component and not rely on the useEffect hook to bring in data.

Lastly, animations! This design is great, but needs some life. I would have added some hover effects to the buttons and possibly added a load in animation for the data being brought in via API.
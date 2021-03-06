# Spelling Worsener
This Chrome extension replaces some words with misspellings or grammatical errors and uses filters to edit other words; see the tables below to see how words are replaced.

## Installation and how to use

I currently don't have plans to submit this to the Chrome app store, so if you're ok with downloading this developer extension, installing it, and having Chrome remind you every time you load it about developer extensions (at least on Windows), then clone/download this repo and follow the instructions [here](http://www.howtogeek.com/233355/how-to-install-extensions-from-outside-the-chrome-web-store-and-firefox-add-ons-gallery/) to install it.

After you install it, look for the extension with the icon that looks like [this](spelling-worsener/no-grammar.png) and click it when you want to worsen a web page's spelling. Click it multiple times for more fun!

For more wackiness, try using this extension combined with my [word-scrambler extension.](https://github.com/m1c0l/word-scrambler)

## What it does

Some words are specifically searched for and replaced with a misspelling or grammatical error:

| Matched word | Replacement |
| --- | --- |
| this | dis |
| that | dat |
| the | ze |
| those | doze |
| its | it's |
| it's | its |
| is | are |
| are | is |
| have | has |
| has | have |
| you're | your |
| your | you're |
| there | they're |
| there's | theirs |
| they're | their |
| their | they're |
| theirs | there's |
| through | though |
| though | thought |
| thought | though |
| lose | loose |
| loose | lose |
| accept | except |
| except | accept |

If the word isn't one of the matches above, the word is run through the following filters to replace part of the word in this order:

| Filter | Replacement | Example |
| --- | --- | --- |
| Word contains 'ex' | 'ex' replaced with x | excel -> xcel |
| Word ends with -s and not -ss | -s ending replaced with -z | his -> hiz |
| Word over 7 characters long and has letter a followed by non-vowel | a's replaced with ah | travelled -> trahvelled |
| Word over 7 characters long and has letter o followed by non-vowel | o's replaced with oh | computer -> cohmputer |
| Word over 7 characters long and ends with -ing | -ing ending replaced with -n | drizzling -> drizzln |

Tip: If you click the extension's button multiple times on a web page you can get some words to become really long strings of 'a' or 'o' followed by lots of h's, or you'll get words that form a cycle, like it's -> its -> it's and so on.

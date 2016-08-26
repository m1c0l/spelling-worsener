# Spelling Worsener
This Chrome extension replaces some words with misspellings or grammatical errors and uses filters to edit other words; see the tables below to see how words are replaced.

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
| Word over 7 characters long and has letter o followed by non-vowel | a's replaced with oh | computer -> cohmputer |
| Word over 7 characters long and ends with -ing | -ing ending replaced with -n | drizzling -> drizzln |

Tip: If you click the extension's button multiple times on a web page you can get some words to become really long strings of 'a' or 'o' followed by lots of h's, or you'll get words that form a cycle, like it's -> its -> it's and so on.

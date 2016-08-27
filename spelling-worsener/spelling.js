// Test for first word, replace with second
var replacements = {
	"this": "dis",
	"that": "dat",
	"the": "ze",
	"those": "doze",
	"its": "it's",
	"it's": "its",
	"is": "are",
	"are": "is",
	"have": "has",
	"has": "have",
	"you're": "your",
	"your": "you're",
	"there": "they're",
	"there's": "theirs",
	"they're": "their",
	"their": "they're",
	"theirs": "there's",
	"through": "though",
	"though": "thought",
	"thought": "though",
	"lose": "loose",
	"loose": "lose",
	"accept": "except",
	"except": "accept"
};

var replaceWord = function(word) {
	// remove punctuation (only 1 character right now) at beginning and end of word
	var orig = word.replace(/\b[.!-,;]/, "");
	var input = orig;
	var alreadyChanged = false;
	// test for certain words, replace if matched
	var lowercaseInput = input.toLowerCase();
	if (typeof replacements[lowercaseInput] !== "undefined") {
		var newInput = replacements[lowercaseInput];
		alreadyChanged = true;
		// if input was all caps, also make replaced input all caps
		if (input == input.toUpperCase()) {
			newInput = newInput.toUpperCase();
		}
		// if input has only first letter capitalized, capitalize new input's first letter
		else if (input[0] == input[0].toUpperCase()) {
			newInput = newInput[0] + newInput.slice(1);
		}
		input = newInput;
	}
	// if not a replacement word, use regex to change the word if matches certain conditions
	if (!alreadyChanged) {
		var isUnicodeApostrophe = false;
		// replace curved apostrophe with straight one
		if (input.indexOf('\u2019') !== -1) {
			input = input.replace('\u2019', "'");
			isUnicodeApostrophe = true;
		}
		
		// replace 'ex' with 'x'
		input = input.replace(/ex/g, 'x');
		// replace s at end of string if doesn't end in -ss
		if (/[^s/'/]s$/.test(input)) {
			input = input.replace(/s$/, 'z');
		}

		// put apostrophe back
		if (isUnicodeApostrophe) {
			input = input.replace("'", '\u2019');
		}

		// if word is long enough
		if (input.length >= 8) {
			// replace the a's and o's if they don't precede vowels
			if (!/a[aeiou]/g.test(input)) {
				input = input.replace(/a/g, 'ah');
			}
			if (!/o[aeiou]/g.test(input)) {
				input = input.replace(/o/g, 'oh');
			}
			input = input.replace(/ing$/, 'n');
		}
	}
	// put edited word back into string
	word = word.replace(orig, input);
	return word;
};

var processText = function(text) {
	if (!/[^\n\s]/.test(text)) {
		return;
	}
	var wordArray = text.split(/\s+/);
	for (var a in wordArray) {
		wordArray[a] = replaceWord(wordArray[a]);
	}
	return wordArray.join(' ');
};

var processBody = (function() {
	var textNode, nodeIter = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
	var ignoreTags = ['script', 'style'];
	while ((textNode = nodeIter.nextNode())) {
		// Skip this text node if it's inside a tag we don't want to edit
		var parentElem = textNode.parentElement;
		if (parentElem) {
			var parentTag = parentElem.tagName.toLowerCase();
			if (ignoreTags.indexOf(parentTag) !== -1) {
				continue;
			}
		}

		textNode.nodeValue = processText(textNode.nodeValue);
	}
})();

var processText = (function() {
	document.title = processText(document.title);
})();

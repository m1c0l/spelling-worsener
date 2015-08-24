// Test for first word, replace with second
var replacements = [
	["this", "dis"],
	["that", "dat"],
	["the", "ze"],
	["is", "are"],
	["are", "is"],
	["have", "has"],
	["has", "have"],
	["you're", "your"],
	["your", "you're"],
	["there", "they're"],
	["they're", "their"],
	["their", "they're"]
];

String.prototype.capitalize = function() {
	// only for one word: make non-whitespace character at beginning uppercase
	return this.replace(/^\S/, function(letter) { return letter.toUpperCase(); });
};

var replaceWord = function(word) {
	// remove punctuation (only 1 character right now) at beginning and end of word
	var orig = word.replace(/\b[.!-,;]/, "");
	var input = orig;
	var alreadyChanged = false;
	// test for certain words
	for (var i in replacements) {
		if (input == replacements[i][0]) {
			input = replacements[i][1];
			alreadyChanged = true;
			break;
		}
		else if (input == replacements[i][0].capitalize()) {
			input = replacements[i][1].capitalize();
			alreadyChanged = true;
			break;
		}
	}
	// if not a replacement word, use regex to change the word
	if (!alreadyChanged) {
		var isUnicodeApostrophe = false;
		// replace curved apostrophe with straight one
		if (input.indexOf('\u2019') !== -1) {
			input = input.replace('\u2019', "'");
			isUnicodeApostrophe = true;
		}
		
		// s at end of string
		if (/[^s/'/]s$/.test(input)) {
			input = input.replace(/s$/, 'z');
		}
		else {
			input = input.replace(/ex/g, 'x');
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

var processNodeText = function(textNode) {
	var ignoreTags = ['script', 'style'];
	var parentElem = textNode.parentElement;
	if (parentElem) {
		var parentTag = parentElem.tagName.toLowerCase();
		if (ignoreTags.indexOf(parentTag) !== -1) {
			return;
		}
	}
	var nodeValue = textNode.nodeValue;
	if (!/[^\n\s]/.test(nodeValue)) {
		return;
	}
	var wordArray = nodeValue.split(/\s+/);
	for (var a in wordArray) {
		wordArray[a] = replaceWord(wordArray[a]);
	}
	var editedWords = wordArray.join(' ');
	textNode.nodeValue = editedWords;
};

var processBody = (function() {
	var textNode, nodeIter = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
    while ((textNode = nodeIter.nextNode())) {
        processNodeText(textNode);
    }
})();

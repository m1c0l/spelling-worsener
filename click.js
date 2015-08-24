function click(e) {
	chrome.tabs.executeScript(null, {file: "spelling.js"});
}

chrome.browserAction.onClicked.addListener(click);
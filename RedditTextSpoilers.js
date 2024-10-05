// ==UserScript==
// @name         Auto Click Shreddit Spoilers (Reddit Text Spoiler Clicker)
// @namespace    https://raw.githubusercontent.com/zellchristensen/UserScripts/main/RedditTextSpoilers.js
// @downloadURL  https://raw.githubusercontent.com/zellchristensen/UserScripts/main/RedditTextSpoilers.js
// @updateURL    https://raw.githubusercontent.com/zellchristensen/UserScripts/main/RedditTextSpoilers.js
// @version      2024-10-05_1.0
// @description  Automatically clicks all <shreddit-spoiler> elements on the page after it loads.
// @author       Zell
// @match        https://www.reddit.com/*
// @icon         https://www.redditstatic.com/shreddit/assets/favicon/192x192.png
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to click all the spoiler elements
    function revealSpoilers() {
        // Get all "shreddit-spoiler" elements
        const spoilers = document.querySelectorAll('shreddit-spoiler');

        // Iterate over each spoiler element
        spoilers.forEach(spoiler => {
            // Find the button inside the shadow DOM
            const shadowRoot = spoiler.shadowRoot;
            if (shadowRoot) {
                const button = shadowRoot.querySelector('.outer');
                if (button) {
                    button.click(); // Click the button to reveal the spoiler
                }
            }
        });
    }

    // Run the function to reveal spoilers
    revealSpoilers();

    // Optionally, you can set a MutationObserver to detect new spoilers added to the page
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                revealSpoilers(); // Call the function to reveal any new spoilers
            }
        });
    });

    // Start observing for changes in the body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

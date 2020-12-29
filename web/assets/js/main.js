/**
 * Uses Fisher–Yates shuffle to randomize order of ideas in list
 * called after onclick event fires on shuffle button
 *
 * @param event
 */
function shuffleIdeas(event) {
    const $ideas = document.querySelector('.idea-list');
    for (let i = $ideas.children.length; i >= 0; i--) {
        $ideas.appendChild($ideas.children[Math.random() * i | 0]);
    }
}


/**
 * Show or hide ideas based on changed filter
 * called after onchange event fires on a filter checkbox
 *
 * @param event
 */
function filterHandler(event) {
    const className = "tag__" + event.target.name;
    console.debug("Finding ideas with class:", className);

    const $ideaTargets = document.querySelectorAll(".idea."+className);
    console.debug("Found ideas:", $ideaTargets);

    $ideaTargets.forEach(($idea) => {
        if (event.target.checked) $idea.style.display = "";
        else $idea.style.display = "none";
    });
}


/**
 * Should be called after document ready
 */
function bindEventHandlers() {
    let $filters = document.querySelectorAll(".js_filter");
    $filters.forEach($filter => {
        $filter.addEventListener("change", filterHandler);
    });

    let shuffleButton = document.querySelector(".js_shuffle");
    shuffleButton.addEventListener("click", shuffleIdeas);
}


/**
 * Call this function to do things after DOM has fully loaded
 * @param callback
 */
function ready(callback) {
    if (document.readyState !== "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(bindEventHandlers);

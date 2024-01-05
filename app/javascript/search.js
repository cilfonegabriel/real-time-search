document.addEventListener("DOMContentLoaded", function() {

    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("input", debounce(function() {
        const query = searchBox.value.trim();

        // If the search value is not empty, the 'sendSearchQuery' function is called with the search value.
        if (query !== '') {
            sendSearchQuery(query);
        }   

    },300));
});
document.addEventListener("DOMContentLoaded", function() {

    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("input", debounce(function() {
        const query = searchBox.value.trim();

        // If the search value is not empty, the 'sendSearchQuery' function is called with the search value.
        if (query !== '') {
            sendSearchQuery(query);
        }   

    },300));

    function sendSearchQuery(query) {
        fetch('/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
          },
          body: JSON.stringify({ query: query })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      }
});


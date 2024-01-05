document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById("query");
    var searchForm = document.getElementById("searchForm");
    var isSubmitting = false;
  
    if (searchInput && searchForm) {
      searchInput.addEventListener("input", debounce(function () {
        handleSearch();
      }, 300));
  
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!isSubmitting) {
          isSubmitting = true;
          disableSearchButton();
          handleSearch();
        }
      });
  
      searchInput.addEventListener("click", function () {
        resetSearchResults();
      });
    }
  
    function handleSearch() {
      if (searchInput) {
        sendSearchQuery(searchInput.value.trim());
      }
    }
  
    function sendSearchQuery(query) {
      if (!query) {
        // No envíes la solicitud si el campo de búsqueda está vacío
        return;
      }
  
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query })
      })
        .then(response => response.json())
        .then(data => handleSearchResponse(data))
        .catch(handleError)
        .finally(() => {
          isSubmitting = false;
          enableSearchButton();
        });
    }
  
    function handleSearchResponse(data) {
      if (data?.status === 'success') {
        updateSearchResults(data.query);
        updateSearchTrends(data.trends);
      } else {
        handleError(data);
      }
    }
  
    function updateSearchResults(query) {
      var searchResultContainer = document.getElementById("searchResultContainer");
      if (searchResultContainer) {
        searchResultContainer.style.display = 'block';
        var searchResult = document.getElementById("searchResult");
        if (searchResult) {
          searchResult.innerText = `You just searched: ${query}`;
        }
      }
    }
  
    function updateSearchTrends(trends) {
      var trendsList = document.getElementById("searchTrendsList");
      if (trendsList) {
        trendsList.innerHTML = '';
  
        if (Object.keys(trends).length > 0) {
          var noRecentSearchesMessage = document.getElementById('noRecentSearchesMessage');
          if (noRecentSearchesMessage) {
            noRecentSearchesMessage.style.display = 'none';
          }
  
          Object.entries(trends).forEach(([query, count]) => {
            var trendItem = document.createElement('li');
            trendItem.textContent = `${query} (${count} times)`;
            trendsList.appendChild(trendItem);
          });
        } else {
          var noRecentSearchesMessage = document.getElementById('noRecentSearchesMessage');
          if (noRecentSearchesMessage) {
            noRecentSearchesMessage.style.display = 'block';
          }
        }
      }
    }
  
    function handleError(error) {
      console.error('Error:', error);
    }
  
    function debounce(func, delay) {
      let timeoutId;
      return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, arguments), delay);
      };
    }
  
    function resetSearchResults() {
      var searchResultContainer = document.getElementById("searchResultContainer");
      if (searchResultContainer) {
        searchResultContainer.style.display = 'none';
      }
  
      var searchTitleContainer = document.getElementById("searchTitleContainer");
      if (searchTitleContainer) {
        searchTitleContainer.innerText = '';
      }
  
      var trendsList = document.getElementById("searchTrendsList");
      if (trendsList) {
        trendsList.innerHTML = '';
      }
  
      var noRecentSearchesMessage = document.getElementById('noRecentSearchesMessage');
      if (noRecentSearchesMessage) {
        noRecentSearchesMessage.style.display = 'none';
      }
    }
  
    function disableSearchButton() {
      var searchButton = document.getElementById("searchButton");
      if (searchButton) {
        searchButton.setAttribute('disabled', 'disabled');
      }
    }
  
    function enableSearchButton() {
      var searchButton = document.getElementById("searchButton");
      if (searchButton) {
        searchButton.removeAttribute('disabled');
      }
    }
  });
  
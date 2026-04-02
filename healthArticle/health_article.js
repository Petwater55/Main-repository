var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
  if (xhr.status === 200) {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles'); // Make sure your HTML has <div id="articles"></div>

    articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      // Title
      var title = document.createElement('h2');
      title.textContent = article.title;

      // Description
      var description = document.createElement('p');
      description.textContent = article.description;

      // Ways to Achieve Header
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      // Ways to Achieve List
      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      // Benefits Header
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      // Benefits List
      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Append all elements to articleDiv
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      // Append articleDiv to articlesDiv
      articlesDiv.appendChild(articleDiv);
    });
  } else {
    console.error('Failed to load JSON data:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('Network error while fetching JSON.');
};

xhr.send();
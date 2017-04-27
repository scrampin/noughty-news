(function(exports) {

  function httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  function getArticleData(json, index) {
    var headline = json.response.results[index].webTitle;
    var body = json.response.results[index].fields.body;
    var pageUrl = json.response.results[index].webUrl;
    return {'headline': headline,'body': body, 'pageUrl': pageUrl};
  }


  function createArticle(url, i) {
  var data = httpGet(url);
  var json = JSON.parse(data);
  articleData = getArticleData(json, i);
  article = new Article(articleData);
  return article;
}


  exports.createArticle = createArticle;
})(this);

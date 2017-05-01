var articleData = {'pageUrl': dataString().response.results[0].webUrl, 'headline': dataString().response.results[0].headline, 'body': dataString().response.results[0].fields.body};

function GuardianDataSourcingDouble() {
  GuardianDataSourcingDouble.prototype.generateArticleData = function(url) {
    return dataString();
  }
  GuardianDataSourcingDouble.prototype.createArticle = function(allArticleData) {
    return new Article(articleData);
  }
}

guardianDataSourcingDouble = new GuardianDataSourcingDouble

function storeListTest() {
  var testAction = "verify a list of articles is created"
  articleList = new ArticleList
  a = articleList.storeList('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=body', guardianDataSourcingDouble)
  assert.isEqual(articleList.listOfNewsArticles.length, 10)
}

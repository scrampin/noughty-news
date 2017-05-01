var articleData = {'pageUrl': dataString().response.results[0].webUrl, 'headline': dataString().response.results[0].webTitle, 'body': dataString().response.results[0].fields.body};

function createArticleTest() {
  var testAction = "verify that an article is created with the correct data"
  guardianDataSourcing = new GuardianDataSourcing();
  article = guardianDataSourcing.createArticle(dataString(), 0);
  assert.containsText(article.headline, 'Call of Duty WWII is about killing for fun.');
}


function getArticleDataTest() {
  var testAction = "Verify that the data required to create an article is output"
  guardianDataSourcing = new GuardianDataSourcing();
  data = guardianDataSourcing.getArticleData(dataString(), 0);
  assert.containsText(data.pageUrl, articleData.pageUrl);
}

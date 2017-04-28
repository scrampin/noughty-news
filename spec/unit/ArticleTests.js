var articleData = {'pageUrl': dataString().response.results[0].webUrl, 'headline': dataString().response.results[0].headline, 'body': dataString().response.results[0].fields.body};

function TextSummaryDouble() {
  TextSummaryDouble.prototype.generateSentences = function() {
    return "Feeling lucky. Feeling ducky.";
  };
};

function generateImageTest() {
  testAction = "If image available, Article this.image is updated with url";
  article = new Article(articleData);
  article.generateImage();
  assert.containsText(article.image, "https://media.guim.co.uk/5a074505dd963aa76329dfcd5916a0225f1bb9cc/0_0_1631_979/1000.jpg")
}

function textSummaryCall() {
  testAction = "tests that summary generator is called (through stub)";
  var textSummaryDouble = new TextSummaryDouble;
  article = new Article(articleData);
  article.generateSummary(textSummaryDouble);
  assert.containsText("Feeling lucky. Feeling ducky.", article.summary)
}

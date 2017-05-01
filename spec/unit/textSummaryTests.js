function generateSentencesTest() {
  var testAction = 'verify that sentences are correctly generatd for summary';
  textSummary = new TextSummary();
  sentences = textSummary.generateSentences(aliyenDataString());
  assert.containsText(sentences, "There is a new Call of Duty video game coming out this November");
}

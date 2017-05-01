(function(exports) {

  function ArticleList() {
    this.listOfNewsArticles = [];
    guardianDataSourcing = new GuardianDataSourcing;

    ArticleList.prototype.storeList = function (url, guardianDataSourcing) {
      var allArticleData = guardianDataSourcing.generateArticleData(url);
      for (var i = 0; i < 10; i++) {
        this.listOfNewsArticles.push(guardianDataSourcing.createArticle(allArticleData, i));
      }
    };

  }
exports.ArticleList = ArticleList;
})(this);

var guardianDataSourcing = new GuardianDataSourcing();
var articleList = new ArticleList();
articleList.storeList('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=body', guardianDataSourcing);

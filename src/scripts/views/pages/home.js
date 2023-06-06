import UrlParser from '../../routes/url-parser';
import { homePage, createInterestArticleContent } from '../templates/template-creator';
import articles from '../../data/data-article';

const Home = {
  async render() {
    return homePage();
  },

  async afterRender() {
    // const articlesList = await articleSource.getArticles();
    // const articleContainer = document.querySelector('#articles');
    // articles.forEach((article) => {
    //   articleContainer.innerHTML += createArticleItemTemplate(article);
    // });
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const articleDetailContainer = document.querySelector('#articles');
    const foundArticle = articles.find((article) => article.id === url.id);
    articleDetailContainer.innerHTML = createInterestArticleContent(foundArticle);
  },
};

export default Home;

import UrlParser from '../../routes/url-parser';
import { createArticleDetailTemplate } from '../templates/template-creator';
import articles from '../../data/data-article';

const Detail = {
  async render() {
    return `
        <div class="container detailContent"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const articleDetailContainer = document.querySelector('.detailContent');
    const foundArticle = articles.find((article) => article.id === url.id);
    articleDetailContainer.innerHTML = createArticleDetailTemplate(foundArticle);
  },
};

export default Detail;

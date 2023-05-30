import { createArticleItemTemplate } from '../templates/template-creator';
import articles from '../../data/data-article';

const Detail = {
  async render() {
    return `
    <div class="explore-article">
      <h1 class="area-title mb-5 text-center">Artikel Pilihan</h1>
      <div class="container listArticle"></div>
    </div>
    `;
  },

  async afterRender() {
    const articleContainer = document.querySelector('.listArticle');
    articles.forEach((article) => {
      articleContainer.innerHTML += createArticleItemTemplate(article);
    });
  },
};

export default Detail;

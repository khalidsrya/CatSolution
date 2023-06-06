import { createArticleItemTemplate, searchBar } from '../templates/template-creator';
import articles from '../../data/data-article';
import DataSource from '../../data/data-source';
import '../../components/search-bar';
const Detail = {
    async render() {
        return `
        
    <div class="explore-article">
    <search-bar></search-bar>
      <h1 class="area-title mb-5 text-center">Artikel Pilihan</h1>
      <div class="container listArticle"></div>
    </div>
    `;
    },

    async afterRender() {
        const searchBarContainer = document.querySelector('search-bar');

        const onButtonClicked = async() => {
            try {
                const result = await DataSource.searchbar(searchBarContainer.value);
                renderResult(result);
            } catch (message) {
                fallbackResult(message);
            }
        };
        const renderResult = results => {
            const articleContainer = document.querySelector('.listArticle');
            articleContainer.innerHTML = ''; // Clear the container before rendering
            results.forEach(article => {
                articleContainer.innerHTML += createArticleItemTemplate(article);
            });
        };
        const fallbackResult = message => {
            console.log('error', message);
        };

        searchBarContainer.clickEvent = onButtonClicked;

        const articleContainer = document.querySelector('.listArticle');
        articles.forEach((article) => {
            articleContainer.innerHTML += createArticleItemTemplate(article);
        });
    },
};

export default Detail;
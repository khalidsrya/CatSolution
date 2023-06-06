import articles from "./data-article";

class DataSource {
    static searchbar(keyword) {
        return new Promise((resolve, reject) => {
            const filterArticle = articles.filter(article => article.title.toUpperCase().includes(keyword.toUpperCase()));
            if (filterArticle.length) {
                resolve(filterArticle);
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }
}

export default DataSource;
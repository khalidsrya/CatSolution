import articles from "./data-article";

class DataSource {
    static searchbar(keyword) {
        return new Promise((resolve, reject) => {
            const filterArticle = articles.filter(article => article.title.toUpperCase().includes(keyword.toUpperCase()));
            if (filterArticle.length) {
                resolve(filterArticle);
            } else {
                const errorMessage = `${keyword} is not found`;
                alert(errorMessage); // Tambahkan perintah alert di sini
                reject(errorMessage);
            }
        });
    }
}

export default DataSource;
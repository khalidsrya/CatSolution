import { openDB } from 'idb';
import CONFIG from './config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});
const FavoriteArticle = {
  async getArticle(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllArticles() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putArticle(Article) {
    return (await dbPromise).put(OBJECT_STORE_NAME, Article);
  },
  async deleteArticle(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};
export default FavoriteArticle;
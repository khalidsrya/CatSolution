import Home from '../views/pages/home';
import Article from '../views/pages/article';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';
import Service from '../views/pages/services';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/article': Article,
  '/about': About,
  '/detail/:id': Detail,
  '/services': Service,

};

export default routes;

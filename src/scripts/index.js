import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/footer';
import App from './views/app';
import 'bootstrap';

const app = new App({
    content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
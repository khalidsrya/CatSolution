import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/footer';
import App from './views/app';
import 'bootstrap';
import Service from './views/pages/services';

    const app = new App({
        content: document.querySelector('#content'),
    });

    window.addEventListener('hashchange', () => {
        app.renderPage();
    });

    window.addEventListener('load', () => {
        app.renderPage();
        if (window.location.hash === '#/services') {
            Service.render(); // Hapus await di sini
            Service.afterRender(); // Hapus await di sini
        }
    });
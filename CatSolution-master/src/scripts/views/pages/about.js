import { aboutPage } from '../templates/template-creator';

const about = {
  async render() {
    return aboutPage();
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
  },
};

export default about;

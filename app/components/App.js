import {Application} from 'orchestra';
import ItemView from './ItemView';

export default Application.extend({
  region: '#app',

  initialize() {
    this.on('start', () => {
      this.showView(new ItemView());
    })
  }
});

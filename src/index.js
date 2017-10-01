import angular from 'angular';
import {App} from './containers/app';
import {AppCtrl} from './controllers/app';
import './style/index.scss';

const MODULE_APP = 'app';

angular.module(MODULE_APP, [])
  .directive('app', App)
  .controller('AppCtrl', AppCtrl);

export default MODULE_APP;

//Dev
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

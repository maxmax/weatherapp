import {appShow} from './show';

export class AppCtrl {

  constructor($scope, $http) {

    this.state = {
      loader : 'default',
      title  : 'Weather App',
      text   : 'This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.',
      icon   : '04n',
      apiUrl : 'https://api.openweathermap.org/data/2.5/weather?lat=',
      apiId  : 'b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial'
    }
    this.update = $http;

  }

  clickIt() {
    this.state.loader = 'load';
    this.state.disabled = 'disabled';
    this.state.text = 'Geolocation in progress...';
    appShow(this, this.update);
  }

}

AppCtrl.$inject = ['$scope', '$http'];

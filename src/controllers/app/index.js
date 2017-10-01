import {appShow} from './show';

export class AppCtrl {

  constructor($scope, $http) {
    this.loader = 'default';
    this.title = 'Weather App';
    this.text = 'This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.';
    this.icon = '04n';
    this.update = $http;
    this.scope = $scope.app;
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=';
    this.apiId = 'b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial';
  }

  clickIt() {
    this.loader = 'load';
    this.disabled = 'disabled';
    this.text = 'Geolocation in progress...';
    appShow(this.scope, this.update);
  }

}

AppCtrl.$inject = ['$scope', '$http'];

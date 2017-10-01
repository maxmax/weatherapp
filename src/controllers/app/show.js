export const appShow = (s, h) => {
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(location) {
      const loc = location.coords.latitude + '&lon=' + location.coords.longitude;
      const currentUrl = s.apiUrl + loc + '&appid=' + s.apiId;
      h.get(currentUrl).then(function(response) {
        s.title = response.data.name;
        s.temp = response.data.main.temp + '°';
        s.icon = response.data.weather[0].icon;
        s.meteoData = response.data;
        s.loader = 'loaded';
        s.text = 'Geolocation confirmed!';
        s.disabled = '';
      });
    });
  }
}

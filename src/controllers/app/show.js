export const appShow = (app, update) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(location) {
      const loc = location.coords.latitude + '&lon=' + location.coords.longitude;
      const currentUrl = app.state.apiUrl + loc + '&appid=' + app.state.apiId;
      update.get(currentUrl).then(function(response) {
        app.state = {
          title     : response.data.name,
          temp      : response.data.main.temp + '°',
          icon      : response.data.weather[0].icon,
          meteoData : response.data,
          loader    : 'loaded',
          text      : 'Geolocation confirmed!',
          disabled  : 'none'
        }
      });
    });
  } else {
    console.log("geolocation error notification!")
  }
}

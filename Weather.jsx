import React from "react";

// const toQueryString = obj => {
//   const parts = [];
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
//     }
//   }
//   return parts.join("&");
// };

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(() => console.log(location));
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(location) {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;

    let apikey = "ffe0f684b33c9f3c73047105f943114d";
    url += `&APPID=${apikey}`;
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status === 200) {
          let data = JSON.parse(request.responseText);

          this.setState({ weather: data });
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  }

  render() {
    let weatherStatus;
    let locationName;
    if (this.state.weather) {
      console.log(this.state.weather);
      locationName = this.state.weather.name;
      weatherStatus = this.state.weather.main.temp;
      weatherStatus = Math.floor(((weatherStatus - 273.75) * 9) / 5) + 32;
    } else {
      weatherStatus = "waiting...";
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className="weatherDiv">
          <div>{locationName}</div>
          <div>{weatherStatus}</div>
        </div>
      </div>
    );
  }
}

export default Weather;

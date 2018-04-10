import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData) {
    return (
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//talking about the keys in root reducers
// this function takes in the state from our root reducer and returns the weather
//key
function mapStateToProps({ weather }) {
  return { weather };
}
//this function takes the weather key and connects the data to the props
//of our class based item here
export default connect(mapStateToProps)(WeatherList);

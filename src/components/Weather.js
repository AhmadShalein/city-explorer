import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastArr: this.props.weatherData
    }
  }
  
  render() {
    return (
      <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>{this.props.weather.date}</th>
                    <th>{this.props.weather.description}</th>
                  </tr>
                </thead>
              </Table>
        </div>
    )}
}
export default Weather;
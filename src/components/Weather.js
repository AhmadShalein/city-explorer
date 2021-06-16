import React from 'react';

class Weather extends React.Component {
  render() {
    return(
      this.props.weather.map((day, index) => (
        <div key={index}>
          <p>day: {day.date}</p>
          <p>description: {day.description}</p>
        </div>
      ))
    )
  }
}

export default Weather;


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
      <>
      <h1>Weather</h1>
        {this.props.weather.length !== 0 && this.props.showWeather &&
          <div className='gird'>
            {this.props.weather.map((day, index) => (

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i}</td>
                    <td>{this.props.weather[i].data}</td>
                    <td>{this.props.weather[i].description}</td>
                  </tr>
                </tbody>
              </Table>

            ))
            }
          </div>
        }
        {this.props.showWeather === false &&
          <Table>
            <thead action variant="danger">
              <tr>
              {this.props.weather.data}
              </tr>
            </thead>
          
          </Table>
        }
      </>
    )
  }
}
export default Weather;
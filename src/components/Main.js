import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import CitySearch from './CitySearch';
import LatLon from './LatLon';
import Map from './Map';
import Weather from './Weather';
import Movies from './Movies';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cityData: '',
            location: '',
            latitude: '',
            longitude: '',
            errorMessage: '',
            displayError: false,
            displayMap: false,
            searchQuery: '',
            showWeather: false,
            showMovies: false,
            weather: [],
            movies: []
        }
    }

    updateCity = (event) => {
        this.setState({searchQuery: event.target.value});
    }

    displayLatLon = async(event) => {
        event.preventDefault();
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
        try {
        let location = await axios.get(url);
        this.setState({
            location: location.data[0].display_name,
            latitude: location.data[0].lat, 
            longitude: location.data[0].lon, 
            displayMap: true,
            displayError: false 
        });
        this.displayWeather(location.data[0].lat, location.data[0].lon)
        }
        catch(error){
            this.setState({
            displayMap: false,
            displayError: true,
            errorMessage: `error is ${error}`,
        });
        }
    }

    displayWeather = async (lat, lon) => {
        try{
          let weather = await axios.get(`${process.env.REACT_APP_URL}/weather?city=${this.state.searchQuery}`, { params: {latitude: lat, longitude: lon, searchQuery: this.state.searchQuery}});
          this.setState({
            weather: weather.data,
            showWeather: true
          })
        } catch(error){
          this.setState({
            displayMap: false,
            displayError: true,
            showWeather: false,
            errorMessage: `error is ${error}`, 
          })
        }
      }

      displayMovies = async () => {
        try{
          let movies = await axios.get(`${process.env.REACT_APP_URL}/movie`, { params: {city: this.state.searchQuery}});
          this.setState({
            movies: movies.data,
            showMovies: true,
          })
        } catch(error){
          this.setState({
            errorMessage: `error is ${error}`,
            showMovies: false
          });
        }
      } 

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <CitySearch updateCity={this.updateCity} displayLatLon={this.displayLatLon} hasError={this.state.displayError} errorMessage={this.state.errorMessage} />
                    </Col>
                </Row>
                {this.state.displayMap && 
                <>
                <Row>
                    <Col>
                        <LatLon city={this.state.location} lat={this.state.latitude} lon={this.state.longitude} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Map img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.state.latitude},${this.state.longitude}&size=${window.innerWidth}x300&format=jpg&zoom=12`} city={this.state.location} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Weather weather={this.state.weather} />
                    </Col>
                </Row>
                <Row>
                    <COl>
                        <Movies movies={this.state.movies} />
                    </COl>
                </Row>
                </>
            }
            </Container>
        )
    }
}
export default Main;
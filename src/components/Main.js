import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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

    displayLatLon = async (event) => {
        event.preventDefault();
        await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`).then(response => {
            this.setState({
                location: response.data[0].display_name,
                latitude: response.data[0].lat, 
                longitude: response.data[0].lon, 
                displayMap: true,
                displayError: false 
            });
        })
        .catch(error => {
            this.setState({
            displayMap: false,
            displayError: true,
            errorMessage: `error is ${error}`,
        });
        })
        await axios.get(`${process.env.REACT_APP_URL}/weather?lon=${this.state.longitude}&lat=${this.state.latitude}`).then(response => {
            this.setState({
                weather: response.data,
                showWeather: true
              })
          })
        .catch(error => {
          this.setState({
            displayMap: false,
            displayError: true,
            showWeather: false,
            errorMessage: `error is ${error}`, 
          })
        });
        await axios.get(`${process.env.REACT_APP_URL}/movies?city=${this.state.searchQuery}`).then(response => {
            this.setState({
                movies: response.data,
                showMovies: true,
              })
          })
        .catch(error => {
          this.setState({
            errorMessage: `error is ${error}`,
            showMovies: false
          });
        })
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
                    {
                        this.state.weather.map(item => <Weather weather={item} />)
                    }
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {
                        this.state.movies.map(item => <Movies movies={item} />)
                    }
                    </Col>
                </Row>
                </>
            }
            </Container>
        )
    }
}
export default Main;
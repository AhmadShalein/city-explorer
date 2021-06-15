import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            locData: '',
            errMsg: '',
            displayErrMsg: false,
            displayMap: false,
            weather: []
        }
    }
    getLocation = async(event) =>{
        event.preventDefault();
        let searchQuery = event.target.searchQuery.value;
        let locURL = `https://us1.locationiq.com/v1/search.php?key=pk.6068842866a518c814042159bfec69af&q=${searchQuery}&format=json`;
        let weatherURL = `http://localhost:${process.env.PORT}/weather`;
        try {
        let locResult = await axios.get(locURL);
        let weatherResult = await axios.get(weatherURL);
        console.log(locResult.data);
        this.setState({
            locData:locResult.data[0],
            displayMap:true,
            weather:weatherResult.data
        })
        }
        catch {
        this.setState({
            errMsg: 'error this is a bad response',
            displayErrMsg:true
        })
        }
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.getLocation}>search</button> */}
                <form onSubmit={this.getLocation}>
                <input type='text' placeholder='Enter City Name' name='searchQuery' />
                <input type='submit' value='Explore!' />
                </form>
                <p>{this.state.locData.display_name}</p>
                <p>{this.state.locData.lon}</p>
                <p>{this.state.locData.lat}</p>
                {this.state.displayMap &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.6068842866a518c814042159bfec69af&center=${this.state.locData.lat},${this.state.locData.lon}`} alt='map'/> }
                {this.state.displayErrMsg && this.state.errMsg}
                {
                this.state.weather.map (item => {
                <Weather data={item.date} description={item.description} />
                    })
                }
            </div>
        )
    }
}
export default Main;
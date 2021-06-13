import React from 'react';
import axios from 'axios';

class Main extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            locData: '',
            errMsg: '',
            displayErrMsg: false,
            displayMap: false
        }
    }
    getLocation = async(event) =>{
        event.preventDefault();
        let searchQuery = event.target.searchQuery.value;
        let locURL = `https://us1.locationiq.com/v1/search.php?key=pk.6068842866a518c814042159bfec69af&q=${searchQuery}&format=json`;
        try {
        let locResult = await axios.get(locURL);
        console.log(locResult.data);
        this.setState({
            locData:locResult.data[0],
            displayMap:true
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
                { this.state.displayErrMsg && this.state.errMsg}
            </div>
        )
    }
}
export default Main;
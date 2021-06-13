import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';

class App extends React.Component {

  render(){
    return(
      <div>
        <h1>React axios app</h1>
        <Main />
      </div>
      );
}
}

export default App;


// https://eu1.locationiq.com/v1/search.php?key=pk.6068842866a518c814042159bfec69af&q=SEARCH_STRING&format=json
// pk.6068842866a518c814042159bfec69af


// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Main from './components/Main';



// function App() {
//   return (
//     <div className="App">
//         <Main />
//     </div>
//   );
// }

// export default App;


// constructor(props){
//   super(props);
//   this.state ={
//     locData:'',
//     errMsg:'',
//     displayErrMsg: false,
//     displayMap:false
// }
// }
// getLocation = async(event) =>{
//   event.preventDefault();
//   let searchQuery = event.target.searchQuery.value;
//   let locURL = `https://eu1.locationiq.com/v1/search.php?key=pk.6068842866a518c814042159bfec69af&q=${searchQuery}&format=json`;
//   try {
//     let locResult = await axios.get(locURL);
//     console.log(locResult.data);
//     this.setState({
//       locData:locResult.data[0],
//       displayMap:true
//     })
//   }
//   catch {
//     this.setState({
//       errMsg: 'error this is a bad response',
//       displayErrMsg:true
//     })
//   }
// }
/* <h1>React axios app</h1>
{/* <button onClick={this.getLocation}>Explore!</button> */
/* <form onSubmit={this.getLocation}>
<input type='text' placeholder='Write the city name here!' name='searchQuery' />
</form>
<p>{this.state.locData.display_name}</p>
<p>{this.state.locData.lon}</p>
<p>{this.state.locData.lat}</p>
{this.state.displayMap &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.6068842866a518c814042159bfec69af&center=${this.state.locData.lat},${this.state.locData.lon}`} alt='map'/> }
{ this.state.displayErrMsg && this.state.errMsg} */
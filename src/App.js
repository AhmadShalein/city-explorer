import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Navbar from 'react-bootstrap/Navbar';

class App extends React.Component {

  render(){
    return(
      <div>
        <header>
          <Navbar bg='dark' expand="lg">  
              <h1>City Explorer</h1>
              <p>Enter a location below to learn about the weather, restaurants, movies, and more! </p>
          </Navbar>
        </header>
        <Main />
      </div>
      );
}
}

export default App;
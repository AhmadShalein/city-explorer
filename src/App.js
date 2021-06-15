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
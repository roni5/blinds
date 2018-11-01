import * as React from 'react';
import './App.css';
import IForm from './components/IForm'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <IForm text="Hello" />
        </div>
      </div>
    );
  }
}

export default App;

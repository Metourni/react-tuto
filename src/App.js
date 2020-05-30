import React from 'react';
import logo from './logo.svg';
import './App.css';

function FullnameComponent(props){
  return (
    <div>{props.firstName} {props.lastName}</div>
  )
}

function MyFirstComp(props){
  return (
    <div>Hello <FullnameComponent firstName={props.firstName} lastName={props.lastName} /></div>
  )
}

class MySecondComp extends React.Component{
  render(){
    return (
      <div>Salut Mr, {this.props.name}</div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyFirstComp firstName="Meto" lastName="Opop"></MyFirstComp>
        </p>
        <p>
          <MyFirstComp firstName="Mohamed" lastName="Amine"></MyFirstComp>
        </p>

        <p>
          <MySecondComp name="Amine"></MySecondComp>
        </p>
      </header>
    </div>
  );
}

export default App;

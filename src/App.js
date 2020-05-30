import React from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends React.Component {
  interval;

  constructor(props) {
    super(props);
    const {start} = props;
    this.state ={
      time: start || 0
    }
  }

  componentDidMount() {
    this.declareTimer()
  }

  declareTimer = ()=>{
    this.interval = setInterval(()=>{
      this.setState({time: this.state.time+1});
    },1000)
  };

  componentWillUnmount() {
    this.interval.clearInterval();
  }


  render(){
   return (<div>time: {this.state.time}</div>)
 }
}

function FullNameComponent(props){
  return (
    <div>{props.firstName} {props.lastName}</div>
  )
}

function MyFirstComp(props){
  return (
    <div>Hello <FullNameComponent firstName={props.firstName} lastName={props.lastName} /></div>
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
          <Clock start={30} />
        </p>
        <p>
          <Clock start={0} />
        </p>
        <p>
          <MyFirstComp firstName="Meto" lastName="Opop" />
        </p>
        <p>
          <MyFirstComp firstName="Mohamed" lastName="Amine" />
        </p>

        <p>
          <MySecondComp name="Amine" />
        </p>
      </header>
    </div>
  );
}

export default App;

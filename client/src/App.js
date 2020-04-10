import React from "react";
import "./App.css";
import axios from "axios";
import PlayerForm from "./components/PlayerForm";
import Navbar from "./components/NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }
  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then((response) => {
      console.log(response);
      this.setState({players:response.data,})
    })
    .catch((error => {
      console.error("The data is not being")
    }))
  }


render() {
  return (
    <div className="App">
      <Navbar/>
      {this.state.players.map(item => <PlayerForm item={item}/>)}
    </div>
  );
}
}
export default App;

import React, { Component } from 'react';
import PokedexList from './Pokedex/PokedexList';
import '../App.css';
 class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokedexList />
        </div>
      </div>
    );
  }
}
export default Dashboard;
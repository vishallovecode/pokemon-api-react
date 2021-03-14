import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import NavBar from './Component/Navbar';
import PokedexCard from './Component/Pokedex/PokedexCard';
import PokedexDetails from './Component/Pokedex/Pokedexdetails';


function App() {
  return (
    <Router>
    <div className="App" >
      <NavBar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokedex/:id" component={PokedexDetails} />
        </Switch>
      </div>
    </div>
  </Router>
);
}
export default App;

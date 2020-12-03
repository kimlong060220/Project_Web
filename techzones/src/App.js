import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Component} from 'react'
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home from './Page/Home/Home'
import Login from './Page/Login/Login'
import Cart from './Page/Cart/Cart'

class App extends Component {
  render() {
    return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;

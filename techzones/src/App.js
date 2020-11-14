import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Component} from 'react'
import {BrowserRouter as Router,Route, link, Switch } from "react-router-dom";
import Home from './Page/Home/Home'
import Login from './Page/Login/Login'
class App extends Component {
  render() {
    return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>

      </div>
    </Router>
    );
  }
}

export default App;

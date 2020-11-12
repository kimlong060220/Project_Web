import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from './Component/TopHeader'
import {Component} from 'react'
import BottomHeader from './Component/BottomHeader';
import Footer from './Component/Footer';
import {BrowserRouter as Router,Route, link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopHeader/>
          <BottomHeader />  
          <Footer/>
        </div>

    </Router>
    );
  }
}

export default App;

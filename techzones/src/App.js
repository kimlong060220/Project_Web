import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from './Component/TopHeader'
import {Component} from 'react'
import BottomHeader from './Component/BottomHeader';
class App extends Component {
  render() {
    return (
    <div className="App">
      <TopHeader /> 
      <BottomHeader />  
    </div>
    );
  }
}

export default App;

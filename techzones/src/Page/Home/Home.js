import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from '../../Component/TopHeader'
import BottomHeader from '../../Component/BottomHeader';
import Footer from '../../Component/Footer';
class Home extends Component {
  render() {
    return (
        <div className="Home">
          <TopHeader/>
          <BottomHeader />  
          <Footer/>
        </div>
    );
  }
}

export default Home;
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from '../../Component/TopHeader'
import BottomHeader from '../../Component/BottomHeader';
// import Footer from '../../Component/Footer';
import data from '../../data'
import Product from '../../Component/Product'

import './Home.css'
class Home extends Component {
  render() {
    return (
        <div className="Home">
          <TopHeader/>
          <BottomHeader />  
          <div>
              <div className="row center justify-content-center">
                  {
                      data.products.map(product =>( 
                        <Product key={product._id} product={product}></Product>
                      ))
                  }
              </div>
          </div>
          

        </div>

    );
  }
}

export default Home;
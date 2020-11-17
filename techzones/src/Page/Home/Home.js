import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from '../../Component/TopHeader'
import BottomHeader from '../../Component/BottomHeader';
// import Footer from '../../Component/Footer';
// import data from '../../../../backend/data'
import Product from '../../Component/Product'

import './Home.css'
// import { response } from 'express';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
    }
  }
  componentDidMount() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({products:data}))
  }
  render() {
    return (
        <div className="Home">
          <TopHeader/>
          <BottomHeader />  
          <div>
              <div className="row center justify-content-center">
                  {
                      this.state.products.map(product =>( 
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
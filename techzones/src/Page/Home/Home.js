import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from '../../Component/TopHeader'
import BottomHeader from '../../Component/BottomHeader';
// import Footer from '../../Component/Footer';
import data from '../../data'
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
                        <div className="col-3">
                        <div key={product._id} className="card">
                              <a href={`/product/${product._id}`}>
                                <img className="medium" src={product.image} alt={product.name}/>
                              </a>
                              <div className="card-body">
                                  <a href={`/product/${product._id}`}>
                                      <h2>{product.name}</h2>
                                  </a>
                                  <div className="rating">
                                      
                                  </div>
                                  <div className="price">${product.price}</div>
                              </div>
                        </div>      
                        </div>
                      ))
                  }
              </div>
          </div>
          

        </div>

    );
  }
}

export default Home;
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from '../../Component/TopHeader'
import BottomHeader from '../../Component/BottomHeader';
import Product from '../../Component/Product'
import './Home.css'
import { listProducts } from '../../actions/productActions';
import {connect} from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
    }
  }
  componentDidMount() {
    this.props.listProducts();
    // fetch('/api/products')
    //   .then((response) => {
    //     return response.json()
    //   }
    //     )
    //   .then(data => this.setState({products:data}))
  }
  render() {
    return (
    
        <div className="Home">
          <TopHeader/>
          <BottomHeader />  
          <div>
              <div className="row center justify-content-center">
                  {
                      this.props.products.map(product =>( 
                        <Product key={product._id} product={product}></Product>
                      ))
                  }
              </div>
          </div>


        </div>

    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.productList.products)
  return { products:state.productList.products }
}
const mapDispatchToProps = () => {
  return {
    listProducts
  }
}
export default connect(mapStateToProps,mapDispatchToProps())(Home)
// export default Home;
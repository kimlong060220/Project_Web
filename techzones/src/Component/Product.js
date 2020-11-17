import { React, Component } from "react";
import Rating from "./Rating";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <div className="col-6 col-md-3 col-sm-4">
        <div key={product._id} className="card">
          <a href={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </a>
          <div className="card-body">
            <a href={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </a>
            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            <div className="price">${product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;

import { React, Component } from "react";
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
            <div className="rating">
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="price">${product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;

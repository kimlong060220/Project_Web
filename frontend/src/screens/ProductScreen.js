import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import './ProductScreen.css'

var item = [
  ['1', '2'],
  ['2', '3'],
  ['3', '4']
]
export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { error, product } = productDetails;
  const table = [
    {col1:"mat kinh" ,  col2:"saphia"},
    {col1:"size" , col2: "44" }
  ]
  const description = [
    {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
    {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
    {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."}
  ]

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const renderPlayer = (table , index) => {
    return(
      <tr key = {index}>
        <td>{table.col1}</td>
        <td>{table.col2}</td>
      </tr>
    )
  }
  const renderDescription=( description, index) => {
    return(
      <div>
      <h2>{description.title}</h2>
      <p>{description.des}</p>
      </div>
    )
  }
  return (
    <div className = "product-container">
      { error ? ( 
       <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div >
          {/* <Link to="/">Back to result</Link> */}
          <div className="row">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                  <p>Thương hiệu:{product.brand}</p>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>
                  <div className = "price_product">
                    {product.price}đ
                  </div>
                </li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
                  <li>
                    <div className = "color">
                      <p>Màu sắc:
                      <button class="button"></button>
                      <button class="button button2"></button>
                      <button class="button button3"></button>
                      <button class="button button5"></button>
                      </p>
                     
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
              </ul>
            </div>
            <div className="col-1">
              <div className = "more">
                <div className = "title">
                  <h2>Tư vấn mua hàng</h2>
                </div>      
                <ul>
                  <li>
                    Freeship với đơn hàng trên 600.000đ
                  </li>
                  <li>
                    Giao hàng ngay (Nội thành TP.HCM)
                  </li>
                  <li>
                    Giao trong vòng 2 đến 3 ngày làm việc (Toàn quốc) 
                  </li>
                </ul>          

              </div>                    
            </div>
          </div>
          <div className ='row'>
            <div className = 'col-3'>
              {description.map(renderDescription)}
            </div>
            <div className = 'col-1'>
              <h1>Thông số Kĩ thuật</h1>
              <table>
                <tbody>
                  {table.map(renderPlayer)}
                </tbody>
              </table>
            </div>
          </div>                        
          <div className = "same_product">
              <h1> Sản phầm cùng tầm giá</h1>
          </div>                        
        </div>
      )} 
    </div>
  );
}

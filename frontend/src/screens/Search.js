import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../actions/productActions';
import MessageBox from '../components/MessageBox';
import './HomePage.css'

export default function Search(props) {
  const dispatch = useDispatch();
  const productListSearch = useSelector((state) => state.productList);
  const { error,products } = productListSearch;
  // console.log(props.location.search)
  const category = props.location.search.split('=')[1].split('&')[0];
  const brand = props.location.search.split('=')[2] ? props.location.search.split('=')[2].split('&')[0] : '';


  useEffect(() => {
    dispatch(searchProduct(category,brand));
  }, [dispatch]);
  return (
    <div>
      <h2>Bạn muốn tìm</h2>
      { error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ):(
        <div className="home">
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

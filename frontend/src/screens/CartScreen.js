import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import PaymentMethodScreen from './PaymentMethodScreen';
import ShippingAddressScreen from './ShippingAddressScreen';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  console.log(cart)
  const checkpayment = () => {
    props.history.push('/signin?redirect=placeorder');
  };
  return (
    <>
    <div className="row top">
      <div className="col-1">
        <h1>Giỏ Hàng Của Bạn</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price * item.qty}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <PaymentMethodScreen></PaymentMethodScreen>
      </div>
      <div className="col-1">
        <ShippingAddressScreen history={props.history}></ShippingAddressScreen>
      </div>
    </div>
    <div className="col-1">
    <div className="card card-body">
      <ul>
        <li>
          <h2>
            Tổng Tiền ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h2>
        </li>
        <li>
          <button
            type="button"
            onClick={checkpayment}
            className="primary block"
            disabled={cartItems.length === 0}
          >
            Thanh Toán
          </button>
        </li>
      </ul>
    </div>
  </div>
  </>
  );
}

import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import { saveShippingAddress } from '../actions/cartActions';
import { savePaymentMethod } from '../actions/cartActions';


export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [number,setNumber] = useState(shippingAddress.number)

  const [paymentMethod, setPaymentMethod] = useState('VN-pay');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country, number })
    );
    // console.log(cart)
  },[dispatch,fullName,address,city,postalCode,country])
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
    dispatch(savePaymentMethod(paymentMethod));
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
        {/* <PaymentMethodScreen></PaymentMethodScreen> */}
        <div>
      <form className="form">
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="Vnpay"
              value="VN-pay"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="Vnpay">Chuyển khoản QR VN-pay</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="cash"
              value="cash"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="cash">Thanh toán khi nhận hàng</label>
          </div>
        </div>
      </form>
    </div>
      </div>
      <div className="col-1">
        {/* <ShippingAddressScreen history={props.history}></ShippingAddressScreen> */}
        <div>
      <form className="form">
        <div>
          <h1>Địa chỉ nhận hàng</h1>
        </div>
        <div>
          <label htmlFor="fullName">Họ tên</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Địa chỉ</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Thành phố</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Mã Tỉnh</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Quốc gia</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phone">SĐT</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter country"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          ></input>
        </div>
        
      </form>
    </div>
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
            type="submit"
            onClick={checkpayment}
            className="primary block"
            disabled={cartItems.length === 0 || shippingAddress.country == "" || shippingAddress.fullName == "" || shippingAddress.address == "" || shippingAddress.city == "" || shippingAddress.postalCode == "" }
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

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';

export default function PaymentMethodScreen() {
  const cart = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState('VN-pay');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(savePaymentMethod(paymentMethod));
    console.log(cart)
  },[dispatch,paymentMethod])
  return (
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
  );
}

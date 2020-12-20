import React, { useEffect } from 'react';
import { useDispatch, useSelector } from './react-redux';
import { deleteOrder, listOrders, payOrder,deliverOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderListScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const {loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ORDER_DELETE_RESET' });
    dispatch(listOrders({}));
    // props.history.push('/signin?redirect=orderlist');
  }, [dispatch, successDelete]);
  useEffect(() => {
    if(successDeliver){
    dispatch({ type: 'ORDER_DELIVER_RESET' });
    dispatch(listOrders({}));
    }
    // props.history.push('/signin?redirect=orderlist');
  }, [dispatch, successDeliver]);

  const deleteHandler = (order) => {
    if (window.confirm('Bạn chắc chắn muốn xoá không?')) {
      dispatch(deleteOrder(order._id));
      dispatch(listOrders({}))
      props.history.push('/signin?redirect=orderlist');
    }
  };
  const paidHandler = (order) => {
    dispatch(payOrder(order,{}))
    dispatch(listOrders({}))
    props.history.push('/signin?redirect=orderlist');
  }
  const deliverHandler = (order) => {
    dispatch(deliverOrder(order._id))
    dispatch(listOrders({}))
    props.history.push('/signin?redirect=orderlist');
  }
  return (
    <div>
      <h1>Orders</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      { loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => paidHandler(order)}
                  >
                    IsPaid
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deliverHandler(order)}
                  >
                    IsDelivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

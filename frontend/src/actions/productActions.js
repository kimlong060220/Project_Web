import Axios from './axios';

export const listProducts = () => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/products`);
    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'PRODUCT_LIST_FAIL', payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    console.log('data....' + data)
    dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DETAILS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createProduct = () => async (dispatch, getState) => {
  dispatch({ type: 'PRODUCT_CREATE_REQUEST' });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/products',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: 'PRODUCT_CREATE_SUCCESS',
      payload: data.product,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: 'PRODUCT_CREATE_FAIL', payload: message });
  }
};
export const updateProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: 'PRODUCT_UPDATE_REQUEST', payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/products/${product._id}`, product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: 'PRODUCT_UPDATE_SUCCESS', payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: 'PRODUCT_UPDATE_FAIL', error: message });
  }
};
export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: 'PRODUCT_DELETE_REQUEST', payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/products/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: 'PRODUCT_DELETE_SUCCESS' });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: 'PRODUCT_DELETE_FAIL', payload: message });
  }
};

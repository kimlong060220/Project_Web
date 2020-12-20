
export const productListReducer = (
  state = {  products: [] },
  action
) => {
  switch (action.type) {
    case 'PRODUCT_LIST_SUCCESS':
      return { products: action.payload };
    case 'PRODUCT_LIST_FAIL':
      return { error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = {product:{}}, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_SUCCESS':
      return {  product: action.payload };
    case 'PRODUCT_DETAILS_FAIL':
      return {  error: action.payload };
    default:
      return state;
  }
};
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_CREATE_REQUEST':
      return { loading: true };
    case 'PRODUCT_CREATE_SUCCESS':
      return { loading: false, success: true, product: action.payload };
    case 'PRODUCT_CREATE_FAIL':
      return { loading: false, error: action.payload };
    case 'PRODUCT_CREATE_RESET':
      return {};
    default:
      return state;
  }
};
export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_UPDATE_REQUEST':
      return { loading: true };
    case 'PRODUCT_UPDATE_SUCCESS':
      return { loading: false, success: true };
    case 'PRODUCT_UPDATE_FAIL':
      return { loading: false, error: action.payload };
    case 'PRODUCT_UPDATE_RESET':
      return {};
    default:
      return state;
  }
};
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_DELETE_REQUEST':
      return { loading: true };
    case 'PRODUCT_DELETE_SUCCESS':
      return { loading: false, success: true };
    case 'PRODUCT_DELETE_FAIL':
      return { loading: false, error: action.payload };
    case 'PRODUCT_DELETE_RESET':
      return {};
    default:
      return state;
  }
};

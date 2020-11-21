const { PRODUCT_LIST_SUCCES } = require("../Constant/productConstants");

export const productListReducer = (state= {products:[]}, action) => {
    switch(action.type){
        case PRODUCT_LIST_SUCCES:
            return {products: action.payload}
    default:
        return state;
    }
}
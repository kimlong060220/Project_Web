import { USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constant/userConstants";

export const userSigninReducer = (state ={},action) => {
    switch (action.type){
        case USER_SIGNIN_SUCCESS:
            return { userInfo: action.payload}
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }
}
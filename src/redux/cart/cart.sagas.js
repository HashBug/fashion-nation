import { all, call, put, takeLatest } from "redux-saga/effects";

import { clearCart } from "./cart.actions";
import userActionTypes from "../user/user.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutClearCart() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutClearCart)]);
}

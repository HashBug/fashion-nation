import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas), call(cartSagas)]);
}

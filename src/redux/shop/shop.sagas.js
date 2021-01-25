import {call, takeEvery, put} from "redux-saga/effects";

import {firestore, convertCollectionSnapshotToMap} from "../../utils/firebase/firebase.utils";
import shopActionTypes from "./shop.types";
import {fetchCollectionsSuccess,fetchCollectionsFailure} from "./shop.actions";

export function* fetchCollectionStartAsync(){
  try{
  const collectionRef = firestore.collection("collections");
  const snapshot = yield collectionRef.get();
  const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
  yield put(fetchCollectionsSuccess(collectionsMap))
  } catch(error){
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionStart(){
  yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionStartAsync);
}
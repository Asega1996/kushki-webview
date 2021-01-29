import { all } from "redux-saga/effects";
import { paymentsSaga } from "./payment";

export default function* rootSaga() {
  yield all([
    ...paymentsSaga
  ]);
}

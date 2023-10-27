import { takeLatest } from "redux-saga/effects";
import { handlerGetUser } from "./handlers/user";
import { GET_USER } from "../redux/ducks/User";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handlerGetUser);
}

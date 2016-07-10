import {takeEvery, takeLatest} from "redux-saga";
import {put} from "redux-saga/effects";
import {createIncome as createIncomeAction} from "../actions";
import _ from "lodash";

function* createIncome(action) {
  const income = {
    id: _.uniqueId('income'),
    date: '2016-01-01',
    payer: 'Someone',
    amount: 0
  }
  yield put(createIncomeAction(income))
}

function* watchNewIncome() {
  yield* takeEvery("NEW_INCOME", createIncome)
}

export default function* rootSaga() {
  yield fork(watchNewIncome)
}
import {takeEvery, takeLatest} from "redux-saga";
import {fork, put} from "redux-saga/effects";
import {
  createIncome as createIncomeAction,
  updateIncome as updateIncomeAction,
  UPDATE_INCOME_REQUEST
} from "../actions";
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

function* updateIncome(action) {
  const income = action.payload
  yield put(updateIncomeAction(income))
}

export default function* rootSaga() {
  yield fork(takeEvery, 'NEW_INCOME', createIncome)
  yield fork(takeLatest, UPDATE_INCOME_REQUEST, updateIncome)
}
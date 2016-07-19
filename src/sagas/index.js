import {takeEvery, takeLatest, eventChannel} from "redux-saga";
import {fork, take, call, put} from "redux-saga/effects";
import {updateIncome as updateIncomeAction, UPDATE_INCOME_REQUEST} from "../actions";
import hz from "../horizon";
import {setIncomes} from "../actions/index";

function* createIncome(hzIncomes, action) {
  const income = {
    date: '2016-01-01',
    payer: 'Someone',
    amount: 0
  }
  yield hzIncomes.store(income)
}

function* updateIncome(action) {
  const income = action.payload
  yield put(updateIncomeAction(income))
}

function* subscribeIncomes(hzIncomes) {
  return eventChannel(emit => {
    hzIncomes.watch().subscribe((incomes) => {
      emit(setIncomes(incomes))
    })
  })
}

function* watchIncomes(hzIncomes) {
  const channel = yield call(subscribeIncomes, hzIncomes)
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

function* handleIncomes() {
  const hzIncomes = hz('incomes')
  yield fork(watchIncomes, hzIncomes)
  yield fork(takeEvery, 'NEW_INCOME', createIncome, hzIncomes)
}

export default function* rootSaga() {
  yield fork(takeLatest, UPDATE_INCOME_REQUEST, updateIncome)
  yield fork(handleIncomes)
}
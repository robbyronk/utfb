import {takeEvery, eventChannel} from "redux-saga";
import {fork, take, call, put} from "redux-saga/effects";
import hz from "../horizon";
import {
  setIncomes,
  CREATE_INCOME,
  UPDATE_INCOME,
  DELETE_INCOME,
  setExpenses,
  CREATE_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE
} from "../actions/index";

function* createIncome(hzIncomes, action) {
  const income = {
    date: '2016-01-01',
    payer: 'Someone',
    amount: 0
  }
  yield hzIncomes.store(income)
}

function* updateIncome(hzIncomes, action) {
  yield hzIncomes.replace(action.payload)
}

function* deleteIncome(hzIncomes, action) {
  yield hzIncomes.remove(action.payload.id)
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
  yield fork(takeEvery, CREATE_INCOME, createIncome, hzIncomes)
  yield fork(takeEvery, UPDATE_INCOME, updateIncome, hzIncomes)
  yield fork(takeEvery, DELETE_INCOME, deleteIncome, hzIncomes)
}

function* createExpense(hzExpenses, action) {
  const expense = {
    date: '2016-01-01',
    payee: 'Someone',
    amount: 0
  }
  yield hzExpenses.store(expense)
}

function* updateExpense(hzExpenses, action) {
  yield hzExpenses.replace(action.payload)
}

function* deleteExpense(hzExpenses, action) {
  yield hzExpenses.remove(action.payload.id)
}

function* subscribeExpenses(hzExpenses) {
  return eventChannel(emit => {
    hzExpenses.watch().subscribe((expenses) => {
      emit(setExpenses(expenses))
    })
  })
}

function* watchExpenses(hzExpenses) {
  const channel = yield call(subscribeExpenses, hzExpenses)
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

function* handleExpenses() {
  const hzExpenses = hz('expenses')
  yield fork(watchExpenses, hzExpenses)
  yield fork(takeEvery, CREATE_EXPENSE, createExpense, hzExpenses)
  yield fork(takeEvery, UPDATE_EXPENSE, updateExpense, hzExpenses)
  yield fork(takeEvery, DELETE_EXPENSE, deleteExpense, hzExpenses)
}

export default function* rootSaga() {
  yield fork(handleIncomes)
  yield fork(handleExpenses)
}
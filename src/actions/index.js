import _ from "lodash";


export const NEW_INCOME = 'NEW_INCOME'
export function newIncome() {
  return {
    type: NEW_INCOME,
  }
}

export const CREATE_INCOME = 'CREATE_INCOME'
export function createIncome() {
  return {
    type: CREATE_INCOME,
  }
}

export const UPDATE_INCOME = 'UPDATE_INCOME'
export function updateIncome(income) {
  return {
    type: UPDATE_INCOME,
    payload: income
  }
}

export const UPDATE_INCOME_REQUEST = 'UPDATE_INCOME_REQUEST'
export function updateIncomeRequest(payload) {
  return {
    type: UPDATE_INCOME_REQUEST,
    payload
  }
}

export const SET_INCOMES = 'SET_INCOMES'
export function setIncomes(arrayOfIncomes) {
  return {
    type: SET_INCOMES,
    payload: _.keyBy(arrayOfIncomes, 'id')
  }
}

export const DELETE_INCOME = 'DELETE_INCOME'
export function deleteIncome(id) {
  return {
    type: DELETE_INCOME,
    payload: {
      id
    }
  }
}

export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export function createCategory() {
  return {
    type: CREATE_CATEGORY,
  }
}

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export function updateCategory(category) {
  return {
    type: UPDATE_CATEGORY,
    payload: category
  }
}

export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    payload: {
      id
    }
  }
}

export const SET_CATEGORIES = 'SET_CATEGORIES'
export function setCategories(arrayOfCategories) {
  return {
    type: SET_CATEGORIES,
    payload: _.keyBy(arrayOfCategories, 'id')
  }
}

export const CREATE_EXPENSE = 'CREATE_EXPENSE'
export function createExpense() {
  return {
    type: CREATE_EXPENSE,
  }
}

export const UPDATE_EXPENSE = 'UPDATE_EXPENSE'
export function updateExpense(expense) {
  return {
    type: UPDATE_EXPENSE,
    payload: expense
  }
}

export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export function deleteExpense(id) {
  return {
    type: DELETE_EXPENSE,
    payload: {
      id
    }
  }
}

export const SET_EXPENSES = 'SET_EXPENSES'
export function setExpenses(arrayOfExpenses) {
  return {
    type: SET_EXPENSES,
    payload: _.keyBy(arrayOfExpenses, 'id')
  }
}
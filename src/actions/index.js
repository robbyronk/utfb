import _ from "lodash";


export const NEW_INCOME = 'NEW_INCOME'
export function newIncome() {
  return {
    type: NEW_INCOME,
  }
}

export const CREATE_INCOME = 'CREATE_INCOME'
export function createIncome(payload) {
  return {
    type: CREATE_INCOME,
    payload
  }
}

export const UPDATE_INCOME = 'UPDATE_INCOME'
export function updateIncome(income) {
  return {
    type: UPDATE_INCOME,
    payload: income
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

export const UPDATE_BUDGET = 'UPDATE_BUDGET'
export function updateBudget(budget) {
  return {
    type: UPDATE_BUDGET,
    payload: budget
  }
}

const defaultCategory = {
  name: 'Yet to be named'
}

export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export function createCategory() {
  const id = _.uniqueId('category')
  return {
    type: CREATE_CATEGORY,
    payload: {
      ...defaultCategory,
      id
    }
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

const defaultExpense = {
  date: '2016-01-01',
  payee: '',
  amount: 0
}

export const CREATE_EXPENSE = 'CREATE_EXPENSE'
export function createExpense() {
  const id = _.uniqueId('expense')
  return {
    type: CREATE_EXPENSE,
    payload: {
      ...defaultExpense,
      id
    }
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
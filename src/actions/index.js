import _ from "lodash";

const defaultIncome = {
  date: 'date',
  payer: 'payer',
  amount: 100
}

export const CREATE_INCOME = 'CREATE_INCOME'
export function createIncome() {
  const id = _.uniqueId('income')
  return {
    type: CREATE_INCOME,
    payload: {
      ...defaultIncome,
      id
    }
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
export const CREATE_INCOME = 'CREATE_INCOME'
export function createIncome(date, payer, amount) {
  const id = _.uniqueId('income')
  return {
    type: CREATE_INCOME,
    payload: {
      id,
      date,
      payer,
      amount
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

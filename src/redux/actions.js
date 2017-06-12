export const SAVE = 'SAVE';

export function save(data) {
  return {
    type: SAVE,
    data
  }
}

export const ADD = 'ADD';

export function add() {
  return {
    type: ADD
  }
}

export const EDIT = 'EDIT';

export function edit(id) {
  return {
    type: EDIT,
    id
  }
}

export const REMOVE = 'REMOVE';

export function remove(id) {
  return {
    type: REMOVE,
    id
  }
}

export const CANCEL = 'CANCEL';

export function cancel() {
  return {
    type: CANCEL
  }
}

export const addData = (data) => ({
  type: 'ADD_DATA_REQUEST',
  payload: data
});

export const deleteData = (id) => ({
  type: 'DELETE_DATA_REQUEST',
  payload: id
});

export const editData = (id, data) => ({
  type: 'EDIT_DATA_REQUEST',
  payload: { id, data }
});

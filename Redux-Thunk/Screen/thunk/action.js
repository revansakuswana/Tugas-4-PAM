import axios from 'axios';

export const addData = (data) => (dispatch) => {
    dispatch({ type: 'ADD_DATA_REQUEST' });
  
    axios.post('https://example.com/api/data', data)
      .then(response => {
        dispatch({
          type: 'ADD_DATA_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'ADD_DATA_FAILURE',
          payload: error.message
        });
      });
  }
  
export const deleteData = (id) => (dispatch) => {
  dispatch({ type: 'DELETE_DATA_REQUEST' });

  axios.delete(`https://example.com/api/data/${id}`)
    .then(response => {
      dispatch({
        type: 'DELETE_DATA_SUCCESS',
        payload: id
      });
    })
    .catch(error => {
      dispatch({
        type: 'DELETE_DATA_FAILURE',
        payload: error.message
      });
    });
}

export const editData = (id, data) => (dispatch) => {
  dispatch({ type: 'EDIT_DATA_REQUEST' });

  axios.put(`https://example.com/api/data/${id}`, data)
    .then(response => {
      dispatch({
        type: 'EDIT_DATA_SUCCESS',
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: 'EDIT_DATA_FAILURE',
        payload: error.message
      });
    });
}


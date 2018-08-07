// export default appData => dispatch => {
export default appData => dispatch => {
  dispatch({
    type: 'SET_APP_DATA',
    appData,
  });
};

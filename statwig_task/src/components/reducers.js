
const initialState = {
    selectedApi: 'All',
    items: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_API':
        return { ...state, selectedApi: action.payload };
      case 'SET_ITEMS':
        return { ...state, items: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;

  
  
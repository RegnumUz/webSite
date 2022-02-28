const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, counter: state.counter + 1 };
    case 'PAYLOAD':
      return { ...state, counter: state.counter + action.payload };
    case 'DECREASE':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counter;

const initState = {
  count: 0,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}

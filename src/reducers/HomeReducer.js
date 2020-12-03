import { TEXT_INPUT, LOGIN_LOADING, DELETE_BOOK } from '../config/Config'

const INITIAL_STATE = {
  input_name: [],
  loading: false,

};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_INPUT:
      return {
        ...state,
        input_name: state
          .input_name
          .concat({
            key: Math.random(),
            book: action.payload
          })
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case DELETE_BOOK:
      return {
        ...state,
        input_name: state.input_name.filter((item) =>
          item.key != action.payload
        )
      };
    default:
      return state;
  }
}
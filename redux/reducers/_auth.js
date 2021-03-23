import { SIGNIN, SIGNOUT } from '../constants';

const initialState = {
  logged: false,
  user: {},
};
export default function Auth(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return { ...state, logged: true, user: { ...action.payload } };
    case SIGNOUT:
      return { user: {}, logged: false };
    default:
      return { ...state };
  }
}

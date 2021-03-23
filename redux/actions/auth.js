import { SIGNIN, SIGNOUT } from '../constants';

export const signIn = (user) => {
  return { type: SIGNIN, payload: user };
};

export const signOut = () => {
  localStorage.removeItem('_access-token');
  localStorage.removeItem('refresh-token');
  localStorage.removeItem('_user');
  return { type: SIGNOUT };
};

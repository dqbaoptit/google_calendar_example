import { SAVING, ADD_SOUND, PLAY_FAVORITE } from '../constants';

export const SaveFavorite = () => {
  return { type: SAVING };
};

export const AddSound = (track) => {
  return { type: ADD_SOUND, payload: track };
};

export const playFavorite = (list) => {
  return { type: PLAY_FAVORITE, payload: list };
};

import { PLAY, UNPLAY, CLEAR } from '../constants';

export const playAudio = (audio) => {
  return { type: PLAY, payload: audio };
};

export const unplayAudio = (audio) => {
  return { type: UNPLAY, payload: audio };
};

export const clearAudio = () => {
  return { type: CLEAR };
};

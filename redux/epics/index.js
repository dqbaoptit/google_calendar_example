import { combineEpics } from 'redux-observable';
import { mapTo, filter, delay } from 'rxjs/operators';
import { CLEAR, CLEAR_DONE, PLAY_FAVORITE } from '../constants';

const clearAudioEpic = (action$) =>
  action$.pipe(
    filter((action$) => action$.type === CLEAR),
    delay(300),
    mapTo({ type: CLEAR_DONE })
  );

export const rootEpic = combineEpics(clearAudioEpic);

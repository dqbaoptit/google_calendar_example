import '../styles/globals.css';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { withObservable } from 'next-redux-observable';
import { rootEpic } from '../redux/epics';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps?.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default compose(withObservable(rootEpic))(MyApp);

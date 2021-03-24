import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Authorization } from '../config/AuthorizationRoute';
import { signIn, signOut } from '../redux/actions/auth';

function Auth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { status, accessToken, refreshToken } = router.query;

  useEffect(() => {
    async function check() {
      const data = await Authorization(accessToken);
      dispatch(signIn({ ...data }));
      localStorage.setItem('_access-token', accessToken);
      localStorage.setItem('_refresh-token', refreshToken);
      localStorage.setItem('_user', JSON.stringify(data));
      router.push('/');
    }
    check();
  }, []);
  return (
    <>
      <Head>
        <title>Authorizating...</title>
      </Head>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></div>
    </>
  );
}

export default Auth;

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, signIn } from '../redux/actions/auth';
import { Authorization } from '../config/AuthorizationRoute';
export default function AuthorizationContainer() {
  const { logged, user } = useSelector((state) => state._auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const accessToken = process.browser && localStorage.getItem('_access-token');

  useEffect(() => {
    if (accessToken && !logged) {
      (async () => {
        const data = await Authorization(accessToken);
        dispatch(signIn({ ...data }));
      })();
    }
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 30,
        background: 'rgba(51, 142, 239, 0.5)',
        borderRadius: 10,
      }}
    >
      {!logged ? (
        <>
          <h3>Bạn chưa đăng nhập</h3>
          <span
            className="noselect"
            onClick={() => router.push('/api/auth/google')}
            style={{
              padding: '10px 15px',
              background: '#338eef',
              color: '#eee',
              cursor: 'pointer',
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            Đăng nhập bằng Google account
          </span>
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={user.picture}
              alt=""
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                marginRight: 10,
              }}
            />
            <p style={{ color: '#222' }}>{user.name}</p>
          </div>
          <span
            className="noselect"
            onClick={() => dispatch(signOut())}
            style={{
              padding: '10px 15px',
              background: '#338eef',
              color: '#eee',
              cursor: 'pointer',
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            Đăng xuất
          </span>
        </>
      )}
    </div>
  );
}

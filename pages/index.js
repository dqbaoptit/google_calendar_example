import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, signIn } from '../redux/actions/auth';

import axios from 'axios';

export default function Home() {
  const { _auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const isLogged = _auth.logged;
  const router = useRouter();

  const helper = async () => {
    const accessToken = localStorage.getItem('_access-token');

    const list = await axios.get(
      'https://www.googleapis.com/calendar/v3/users/me/calendarList',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log('list: ', list.data.items);
    const calendarId = 'vi.vietnamese%23holiday%40group.v.calendar.google.com';

    console.log('detail: ', calendarId);

    const { data } = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(data);

    const event = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(event.data);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {!isLogged ? (
          <button onClick={() => router.push('/api/auth/google')}>Login</button>
        ) : (
          <div>
            <p>{`Logged by ${_auth.user.name}`}</p>
            <button onClick={() => dispatch(signOut())}>Logout</button>
          </div>
        )}
      </div>
      <button onClick={() => helper()}>Click me </button>
    </div>
  );
}

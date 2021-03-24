import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Calendar from '../components/Calendar';
import axios from 'axios';
import moment from 'moment';
import { signOut } from '../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { route } from 'next/dist/next-server/server/router';

const Authorization = dynamic(() => import('../containers/Authorization'));

export default function Home() {
  const { logged } = useSelector((state) => state._auth);

  const dispatch = useDispatch();
  const initMount = useRef(true);
  const [calendarId, setCalendarId] = useState(null);
  const [_start, setStart] = useState(new Date(Date.now()).toISOString());
  const [_after, setAfter] = useState(7);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('_access-token');
    if (accessToken)
      (async () => {
        try {
          const { data } = await axios.get(
            'https://www.googleapis.com/calendar/v3/users/me/calendarList',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setCalendarId(data.items[0]);
        } catch (err) {
          dispatch(signOut());
        }
      })();
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem('_access-token');

    if (initMount.current) {
      initMount.current = false;
    } else {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
              calendarId.id
            )}/events`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setEvents([...data.items]);
        } catch (err) {
          dispatch(signOut());
        }
      })();
    }
  }, [calendarId]);

  const onFilter = async () => {
    const accessToken = localStorage.getItem('_access-token');

    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          calendarId.id
        )}/events?orderBy=startTime&singleEvents=true&timeMin=${moment(
          _start
        ).toISOString()}&timeMax=${moment(new Date(_start), 'DD/MM/YYYY')
          .add(_after, 'days')
          .toISOString()}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setEvents([...data.items]);
      console.log('min', moment(_start).toISOString());
      console.log(
        'max',
        moment(new Date(_start), 'DD/MM/YYYY').add(_after, 'days').toISOString()
      );
    } catch (err) {
      alert('Phiên làm việc đã hết hạn');
      dispatch(signOut());
    }
  };

  return (
    <>
      <Head>
        <title>Google Calendar Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Authorization />
          {logged && (
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginRight: 10 }}>
                  <p>Start: </p>
                  <input
                    type="date"
                    name=""
                    id=""
                    defaultValue={moment(new Date()).format('YYYY-MM-DD')}
                    onChange={(e) =>
                      setStart(new Date(e.target.value).toISOString())
                    }
                  />
                </div>
                <div>
                  <p>day after </p>
                  <input
                    type="number"
                    name=""
                    id=""
                    defaultValue={7}
                    onChange={(e) => setAfter(e.target.value)}
                  />
                  <button onClick={() => onFilter()}>Filter</button>
                </div>
              </div>
              <div>
                {events.map((item, index) => (
                  <ItemEvent key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const ItemEvent = ({ item }) => {
  return (
    <div
      className="noselect"
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '15px 30px',
        background: 'rgba(3, 252, 161,.5)',
        borderRadius: 10,
        margin: 5,
      }}
    >
      <p style={{ color: '#afafaf', marginRight: 10, fontSize: 13, flex: 1 }}>
        {moment(item.start.dateTime).format('hh:mmA DD-MM-YYYY')} <br /> to{' '}
        <br />
        {moment(item.end.dateTime).format('hh:mmA DD-MM-YYYY')}
      </p>

      <p style={{ flex: 1, textDecoration: 'underline' }}>
        {item?.summary ? item.summary : 'Chưa có tiêu đề'}
      </p>
    </div>
  );
};

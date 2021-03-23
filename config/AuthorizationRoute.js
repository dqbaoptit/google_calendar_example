import axios from 'axios';

const OAuth_HOST =
  process.env.AUTHORIZATION_ROUTE ||
  'https://www.googleapis.com/oauth2/v3/userinfo';

export async function Authorization(accessToken) {
  try {
    const { data } = await axios.get(OAuth_HOST, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('_refresh-token');
      if (refreshToken)
        return new Promise(function (resolve, reject) {
          refeshToken()
            .then((res) => {
              localStorage.setItem('_access-token', res.access_token);
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${res.access_token}`;
              resolve(axios(originalRequest));
            })
            .catch(() => {
              localStorage.clear();
            });
        });
      else {
        localStorage.clear();
      }
    }

    return Promise.reject(error);
  }
}

async function refeshToken() {
  try {
    const { data } = await axios.post(
      `https://www.googleapis.com/oauth2/v3/token?grant_type=refresh_token&refresh_token=${localStorage.getItem(
        '_refresh-token'
      )}
      &client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${
        process.env.GOOGLE_CLIENT_SECRET
      }`
    );
    return data;
  } catch (err) {
    throw err;
  }
}

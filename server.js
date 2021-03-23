const passport = require('passport');
const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('./models/user');
require('./passport/index');

mongoose
  .connect(process.env.DATABASE_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

const port = parseInt(process.env.PORT, 10) || 1234;

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    passport.initialize();

    server.get(
      '/api/auth/google',
      passport.authenticate('google', {
        scope: [
          'profile',
          'email',
          'https://www.googleapis.com/auth/calendar.events',
          'https://www.googleapis.com/auth/calendar.readonly',
        ],
        accessType: 'offline',
        prompt: 'consent',
      })
    );
    server.get('/api/auth/google-callback', (req, res, next) => {
      passport.authenticate('google', (err, user, info) => {
        if (err || !user) {
          return res.redirect('/auth?status=false');
        }
        return res.redirect(
          `/auth?status=true&accessToken=${user.accessToken}&refreshToken=${user.refreshToken}`
        );
      })(req, res, next);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.put('*', (req, res) => {
      return handle(req, res);
    });
    server.post('*', (req, res) => {
      return handle(req, res);
    });
    server.delete('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

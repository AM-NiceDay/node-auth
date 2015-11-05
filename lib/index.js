import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/auth');

import User from './models/User';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/users', (req, res) => {
  let user = req.body;
  user.password = User.hashPassword(user.password);

  User.create(user)
    .then((user) => {
      res.json({
        user: user
      });
    });
});

app.listen(3000);
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const hbs = require('express-handlebars').create({});
const { _SESSION_SECRET } = require('./config/config');
const sequalize = require('./config/connection');
const router = require('./controller');

const app = express();

const myStore = new SequelizeStore({
  db: sequalize,
});

app.use(
  session({
    secret: _SESSION_SECRET,
    store: myStore,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000 },
  })
);

myStore.sync();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;

app.use(router);

sequalize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

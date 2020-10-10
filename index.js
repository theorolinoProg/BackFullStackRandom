import express from 'express';

import routes from './routes/index';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const PORT = process.env.port || 3000;

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// modeifier for x in env et name database in env
const connectionString = "";
mongoose.set('useCreateIndex', true);

mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(client => {
        console.log('Connected to Database')
    })
    .catch(error => console.error(error));

var db = mongoose.connection;

app.use('/user', routes.user);
app.use('/article', routes.article);
app.use('/category', routes.category);

app.use(bodyParser)

app.listen(PORT, () => console.log('Server running'));
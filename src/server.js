const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('../src/routes/bookRoutes')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/library', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(bookRoutes)


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})
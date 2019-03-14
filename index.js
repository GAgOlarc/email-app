const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is running on port ${port}`));


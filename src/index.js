const express = require('express');
const routes = require('./routes');
const aplication = express()


require('./database');

aplication.use(express.json())
aplication.use(routes)

aplication.listen(3030)


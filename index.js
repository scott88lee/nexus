const express = require('express');
const app = express();
const config = require('./config');

// Setup Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Setup Database
const { MongoClient } = require('mongodb');
const client = new MongoClient(
	config.MONGO_URI,
	{ useNewUrlParser: true },
);

// Serve Static Files
app.use('/mock', express.static('./public'));


await client.connect();
app.db = client.db(config.DB_NAME);
console.log('MongoDB connected.');

// Setup Routes
app.use('/', require('./routes'));

const port = config.HTTP_PORT || 3000;
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});

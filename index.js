const express = require('express');
const app = express();

// Setup Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Setup Database
const { MongoClient } = require('mongodb');
const client = new MongoClient(
	process.env.MONGO_URI || throw new Error('Missing MONGO_URI env var'),
	{ useNewUrlParser: true }
);

await client.connect();
app.db = client.db(process.env.DB_NAME || throw new Error('Missing DB_NAME env var'));
console.log('MongoDB connected.');

// Setup Routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

const port = process.env.HTTP_PORT || 3000;
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});


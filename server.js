require('dotenv').config();

const express = require('express');
const breedsRoutes = require('./routes/breeds.js');

const app = express();

app.use(express.json());
// app.use((req, res, next) => {
// 	console.log(req.path, req.method);
// 	next();
// })

app.use('/api/breeds', breedsRoutes);

try {
	app.listen(process.env.PORT, () => {
		console.log('Listening on port', process.env.PORT);
	});
} catch(e) {
	console.log(e);
}
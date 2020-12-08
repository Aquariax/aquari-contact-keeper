const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
connectDB();
const PORT = process.env.Port || 5000;

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res), (res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

app.get('/', (req, res) => res.json({ msg: 'Hi there' }));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

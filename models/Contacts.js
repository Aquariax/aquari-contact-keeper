const mongoose = require('mongoose');

const ContactsSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		default: 'personal',
	},
	type: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('contacts', ContactsSchema);

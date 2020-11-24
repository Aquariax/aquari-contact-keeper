const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Get User');
});
router.post('/', (req, res) => {
	res.send('Auth User');
});

module.exports = router;

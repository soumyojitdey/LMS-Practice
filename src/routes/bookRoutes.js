const express = require('express');
const router = express.Router();
const bookConterller = require('../controller/bookController');

router.get('/books', bookConterller.getAllBooks);
router.get('/getbook', bookConterller.getAllBooks);



module.exports = router;
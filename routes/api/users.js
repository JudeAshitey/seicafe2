const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('./../../config/ensureLoggedIn');
const user = require('./../../models/user');
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;

/*
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;
*/
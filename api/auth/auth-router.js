const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../secrets');

const router = require('express').Router();
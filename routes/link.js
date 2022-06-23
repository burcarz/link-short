// imports just like in c++ haha
const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');

// route handler
const router = express.Router();

// url model import
const Link = require('../models/LinkModel');

const urlBase = 'http:localhost:3001';

router.post('/shorten', async (req, res) => {
    // destructuring
    const {
        longLink
    } = req.body

    // base url conditional using isUri
    if (!validUrl.isUri(urlBase)) {
        return res.status(401).json('invalid base url')
    };

    const linkCode = shortid.generate();
})
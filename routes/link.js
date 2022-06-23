// imports just like in c++ haha
const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');

// route handler
const router = express.Router();

// url model import
const Link = require('../models/LinkModel');

const urlBase = 'http:localhost:3001';

router.get('/test', async (req, res) => {
    res.send('hello!');
})

router.post('/shorten', async (req, res) => {
    // destructuring
    const {
        longLink
    } = req.body

    // base url conditional using isUri
    if (!validUrl.isUri(urlBase)) {
        return res.status(401).json('invalid base url!!!!!')
    };

    const linkCode = shortid.generate();

    if (validUrl.isUri(longLink)) {
        try {
            let link = await Link.findOne({
                longUrl
            })

            if (link) {
                res.json(link)
            } else {
                const tinyLink = urlBase + '/' + linkCode;

                // invoking link model save to the DB
                link = newLink({
                    longLink,
                    shortLink,
                    linkCode,
                    date: new Date()
                })
                await link.save()
                res.json(link);
            }
        }
        // error catch hell yeah lets gooooo
        catch (err) {
            console.log(err + 'oh no');
            res.status(500).json('server error! try again and good luck!')
        }
    } else {
        res.status(401).json('bad target! whoops!')
    }
});

module.exports = router;
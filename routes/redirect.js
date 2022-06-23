// REDIRECT FILE
// SHOULD NOT BE USED
// WHY WAS IT EVEN WRITTEN???
// GOOD QUESTION
// AS A BAILOUT PERHAPS
// CARRY ON AND KILL ME NOW

const express = require('express');

const router = express.Router();

const Link = require('../models/LinkModel');

router.get('/:redirect', async (req, res) => {
    try {
        const link = await Link.findOne({
            linkCode: req.params.redirect
        })
        if (link) {
            return res.redirect(link.longLink)
        } else {
            // else 404
            return res.status(404).json('OH NO! NO NO NO! no linky winky')
        }
    }
    // ERROR HANDLING FUCK YES OH MY GOD
    catch (err) {
        console.error(err)
        res.status(500).json('internal wittle server werver errower')
    }
});

module.exports = router;
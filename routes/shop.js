const express = require('express');
const router = express.Router();

// Shop Routes
router.get('/', async (req, res) => {
    const { db } = req.app
    const prodCollections = db.collection('collections')
    let list = await prodCollections.find({}).toArray();
    //render home page
    res.render('homePage', { list });
});

module.exports = router;


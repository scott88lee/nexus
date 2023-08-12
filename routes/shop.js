const express = require('express');
const router = express.Router();

// Shop Routes
router.get('/', (req, res) => {
    
    //render home page
    const page = `
        <h1>Shop</h1>
        <p>Welcome to the shop!</p>
    `;
    res.send(page);
});

module.exports = router;


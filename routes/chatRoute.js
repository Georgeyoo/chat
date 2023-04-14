const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatController');

// localhost:3001/api/getAnswer
router.post('/getAnswer', (req, res) => {
    chatController.getAnswer(req)
        .then(data => res.json(data))
        .catch(err => res.send(err))
});

module.exports = router;

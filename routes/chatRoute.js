const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatController');

router.post('/getAnswer', (req, res) => {
    console.log(`req.body: ${req.body}`);
    chatController.getAnswer(req)
        .then(data => res.json(data))
        .catch(err => res.send(err))
});

router.post('/getAnswer', (req, res) => {
    console.log(`req.body: ${req.body}`);
    chatController.getAnswer(req)
        .then(data => res.json(data))
        .catch(err => res.send(err))
});

module.exports = router;
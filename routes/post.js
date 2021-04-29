var express = require('express');
var router = express.Router();
var controller = require('../controllers/postController');

router.get('/listar', function(req, res) {
    controller.show(req, res);
});

module.exports = router;

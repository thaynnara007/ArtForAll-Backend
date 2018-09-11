const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const art = require('./Art');

router.use(bodyParser.json());

router.use(function (req, res, next) { 

	res.setHeader('Content-Type', 'application/json'); 
	next();	
});

router.get('/', (req, res) =>{

	res.status(200).json(art.favorites());
});

router.get('/:id', (req,res) =>{

	var id = req.params.id
	res.json(art.favorites()[id]);
});

router.post('/', (req, res) =>{

	res.send(JSON.stringify(req.body, null, 2));
});

module.exports = router;
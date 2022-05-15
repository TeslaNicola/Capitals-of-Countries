const { Router } = require('express');
const controller = require('../components/controller');

const router = Router();

router.get('/capital', controller.findCapitalOfCountry); 

module.exports = router;
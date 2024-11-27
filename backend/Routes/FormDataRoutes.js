// Routes/FormDataRoutes.js
const express = require('express');
const router = express.Router();
const formDataController = require('../Controllers/FormDataControllers');

router.post('/submit-form', formDataController.submitForm);

module.exports = router;

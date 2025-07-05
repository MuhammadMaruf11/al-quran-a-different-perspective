const express = require('express');
const { allSurahController, singleSurahController } = require('../controllers/surahController');
const router = express.Router()

router.get('/', allSurahController)
router.get('/:id', singleSurahController)

module.exports = router;
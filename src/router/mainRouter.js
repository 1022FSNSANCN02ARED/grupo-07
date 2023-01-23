const {Router} = require('express');
const mainController = require ('../controllers/mainController')
const router = Router();

router.get("/", mainController.home);

module.exports= router;

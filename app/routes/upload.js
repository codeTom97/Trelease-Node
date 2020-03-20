const Router = require('koa-router');
const router = new Router({ prefix: '/upload' });
const { save, get } = require('../controller/uplaod');

router.post('/save', save)
router.get('/get', get)

module.exports = router;

const Router = require('koa-router');
const router = new Router({ prefix: '/upload' });
const { save } = require('../controller/uplaod');

router.post('/save', save)

module.exports = router;

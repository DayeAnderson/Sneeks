const router = require('express').Router();
const sneakersCtrl = require('../controllers/sneakers');

// Public Routes

// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, sneakersCtrl.create);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
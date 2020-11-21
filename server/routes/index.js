const router = require('express').Router();
const materialRoutes = require('./materialRoutes');
const deleteRoutes = require('./deleteRoutes');

router.use('/material', materialRoutes);
router.use('/delete', deleteRoutes);

module.exports = router;
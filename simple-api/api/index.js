const router = require('express').Router();
const { products, units } = require('./mock');
const { reply, getByUnitPartNo, getByProductPartNo } = require('./utils');

router.get('/units', (req, res, next) => {
  reply(res, units);
});

router.get('/products', (req, res, next) => {
  const { id } = req.query;
  let result = products;
  /* console.log(req.query.id, units); */
  if (id) {
    const unit = getByUnitPartNo(units)(id);
    /* console.log(id, unit); */
    if (unit) {
      result = unit.unitProducts.map(getByProductPartNo(result));
    }
  }
  console.log(result)
  reply(res, result);
});

module.exports = router;
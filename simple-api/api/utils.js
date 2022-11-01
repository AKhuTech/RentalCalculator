const reply = (res, body, timeout = 500, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

const getByUnitPartNo = (entities) => (partNo) =>
  entities.find((entity) => entity.unitPartNo === partNo);

const getByProductPartNo = (entities) => (partNo) =>
  entities.find((entity) => entity.productPartNo === partNo);


module.exports = { reply, getByUnitPartNo, getByProductPartNo };
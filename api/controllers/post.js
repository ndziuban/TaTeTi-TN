const service = require("../services/tateti");

module.exports = (req, res, next) => {
  return res.json(service.newMatch(req.body));
}

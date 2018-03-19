const service = require("../services/tateti");

module.exports = (req, res, next) => {
  const match = service.getMatchesById(req.params.id);
  if (match.status == "404") {
    return res.status(404).json({"status": 404, "msg": "Match not found"});
  } else {
    return res.json(match);
  }
}

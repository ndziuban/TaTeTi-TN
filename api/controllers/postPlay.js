const service = require("../services/tateti");

module.exports = (req, res, next) => {
  if(!req.body.row
    || !req.body.column
    || !req.body.player 
    || req.body.row < 0
    || req.body.row > 3
    || req.body.column < 0
    || req.body.column > 3) {
      return res.status(500).json({"status": 500, "msg": "Wrong move!"});
    } else {
      const response = service.newMove(req.params.id, req.body.player, req.body.row, req.body.column);

      if(response.status == 404) {
        return res.status(404).json({"status": 404, "msg": "Match not found"});
      } else if (response.status == 500) {
        return res.status(500).json({"status": 500, "msg": "Not your turn!"});
      } else if (response.status == 501) {
        return res.status(501).json({"status": 501, "msg": "Wrong move!"});
      } else {
        return res.json(response);
      }
    }
}

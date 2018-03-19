const getMatch = require("../api/controllers/get.js");
const newMatch = require("../api/controllers/post.js");
const newMove = require("../api/controllers/postPlay.js");

module.exports = router => {
  router.get(`/:id`, getMatch);
  router.post(`/`, newMatch);
  router.post(`/:id`, newMove);
};

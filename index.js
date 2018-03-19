const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

const server = app.listen(8080, function() {
  console.log("Running on ", server.address().port);
});

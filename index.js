/**
 * Created by Janardhan Reddy on 9/30/2019.
 */

var express = require("express");
var app = express();

app.get("/fruits_list", (req, res, next) => {
    res.json(["Mongo", "Apple", "Grapes", "Strawberry", "Blueberry"]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

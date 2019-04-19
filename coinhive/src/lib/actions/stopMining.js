'use strict';
var getMiner = require("./helpers/getMiner");


module.exports = function() {
  getMiner().then(function(miner) {
    miner.stop();
  });
};

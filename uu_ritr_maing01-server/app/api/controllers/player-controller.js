"use strict";
const PlayerAbl = require("../../abl/player-abl.js");

class PlayerController {

  update(ucEnv) {
    return PlayerAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return PlayerAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new PlayerController();

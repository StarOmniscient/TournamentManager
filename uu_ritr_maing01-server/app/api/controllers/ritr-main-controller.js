"use strict";
const RitrMainAbl = require("../../abl/ritr-main-abl.js");

class RitrMainController {
  init(ucEnv) {
    return RitrMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return RitrMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return RitrMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new RitrMainController();

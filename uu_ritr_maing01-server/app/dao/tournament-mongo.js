"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class TournamentMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = TournamentMongo;

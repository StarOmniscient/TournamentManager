"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/team-error.js");

const WARNINGS = {

};

class TeamAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("team");
  }

  async list(awid, dtoIn) {
    
  }

  async get(awid, dtoIn) {
    const validationResult = this.validator.validate("TeamGetDtoInType", dtoIn);

    if (!validationResult.isValid()) {
      throw new Error("InvalidDtoIn");
  }
  }

  async update(awid, dtoIn) {
    const validationResult = this.validator.validate("TeamUpdateDtoInType", dtoIn);

    if (!validationResult.isValid()) {
      throw new Error("InvalidDtoIn");
  }
  }

  async create(awid, dtoIn) {
    const validationResult = this.validator.validate("TeamCreateDtoInType", dtoIn);

    if (!validationResult.isValid()) {
      throw new Error("InvalidDtoIn");
  }
  }

}

module.exports = new TeamAbl();

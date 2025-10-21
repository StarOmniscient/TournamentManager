"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/player-error.js");
const {Edupage} = require("edupage-api")

const WARNINGS = {

};

class PlayerAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("player");
  }

  async get(awid, dtoIn) {
    const validationResult = this.validator.validate("PlayerGetDtoInType", dtoIn);

    if (!validationResult.isValid()) {
      throw new Error("InvalidDtoIn");
  }
  }

  async update(awid, dtoIn) {
      const validationResult = this.validator.validate("PlayerUpdateDtoInType", dtoIn);

    if (!validationResult.isValid()) {
      throw new Error("InvalidDtoIn");
  }
  }

  async create(awid, dtoIn) {
    const validationResult = this.validator.validate("PlayerCreateDtoInType", dtoIn);

    if (!validationResult.isValid()) {
      throw new Error(Errors.Create.InvalidDtoIn);
  }
    if (!dtoIn.name) {
      throw new Error(Errors.Create.NameMissing);
    }
    if (!dtoIn.password) {
      throw new Error(Errors.Create.PasswordMissing);
    }
    const edupage = new Edupage()
    try {
    await edupage.login(dtoIn.name, dtoIn.password)
    } catch (e) {
      if (e.name == "LoginError") {
        throw new Error(Errors.Create.InvalidCredentials);
      }
    }

    if (!edupage.user) {
      throw new Error(Errors.Create.UserNotFound);
    }
    const user = {
      id: edupage.user.id,
      name: `${edupage.user.firstname} ${edupage.user.lastname}`,
      school: edupage.user.origin.trim().toLowerCase(),
      role: edupage.user.userString.replace(edupage.user.id, "").trim().toLowerCase()
    }

    const existing = await this.dao.get(awid, edupage.user.id)
    
    if (!existing) {
      const out = await this.dao.create({
      awid,
      id: user.id,
      name: user.name,
      school: user.school,
      role: user.role
    })
    }
    return user

  }

}

module.exports = new PlayerAbl();

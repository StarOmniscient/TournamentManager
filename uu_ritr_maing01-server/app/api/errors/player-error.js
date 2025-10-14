"use strict";

const RitrMainUseCaseError = require("./ritr-main-use-case-error.js");
const PLAYER_ERROR_PREFIX = `${RitrMainUseCaseError.ERROR_PREFIX}player/`;

const Create = {
  UC_CODE: `${PLAYER_ERROR_PREFIX}create/`,

};

const Update = {
  UC_CODE: `${PLAYER_ERROR_PREFIX}update/`,

};

module.exports = {
  Update,
  Create
};

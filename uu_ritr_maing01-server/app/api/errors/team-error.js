"use strict";

const RitrMainUseCaseError = require("./ritr-main-use-case-error.js");
const TEAM_ERROR_PREFIX = `${RitrMainUseCaseError.ERROR_PREFIX}team/`;

const Create = {
  UC_CODE: `${TEAM_ERROR_PREFIX}create/`,

};

const Update = {
  UC_CODE: `${TEAM_ERROR_PREFIX}update/`,

};

const Get = {
  UC_CODE: `${TEAM_ERROR_PREFIX}get/`,

};

const List = {
  UC_CODE: `${TEAM_ERROR_PREFIX}list/`,

};

module.exports = {
  List,
  Get,
  Update,
  Create
};

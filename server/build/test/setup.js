"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.BASE_URL = exports.server = exports.expect = void 0;var _supertest = _interopRequireDefault(require("supertest"));
var _chai = _interopRequireDefault(require("chai"));
var _sinonChai = _interopRequireDefault(require("sinon-chai"));
var _app = _interopRequireDefault(require("../app"));

_chai.default.use(_sinonChai.default);var
expect = _chai.default.expect;exports.expect = expect;
var server = _supertest.default.agent(_app.default);exports.server = server;
var BASE_URL = '/v1';exports.BASE_URL = BASE_URL;
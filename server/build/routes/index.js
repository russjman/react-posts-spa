"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));

var _controllers = require("../controllers");

var router = _express.default.Router();

var corsConfig = {
  origin: '*' };


router.get('/posts', (0, _cors.default)(corsConfig), _controllers.getPosts);var _default =

router;exports.default = _default;
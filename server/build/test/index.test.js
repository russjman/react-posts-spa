"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _axios = _interopRequireDefault(require("axios"));
var _axiosMockAdapter = _interopRequireDefault(require("axios-mock-adapter"));

var _setup = require("./setup");
var _posts = require("./fixtures/posts");

var mock = new _axiosMockAdapter.default(_axios.default);


describe('Index test', function () {
  it('should get posts from typicode', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            mock.onGet('http://jsonplaceholder.typicode.com/posts').reply(200, _posts.posts);_context.next = 3;return (
              _setup.server.
              get("".concat(_setup.BASE_URL, "/posts")).
              expect(200));case 3:res = _context.sent;
            (0, _setup.expect)(res.status).to.equal(200);
            (0, _setup.expect)(res.body.data[0]).to.deep.equal(_posts.posts[0]);case 6:case "end":return _context.stop();}}}, _callee);})));


  it('should return server error', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            mock.
            onGet('http://jsonplaceholder.typicode.com/posts').
            reply(500, 'Internal server error');_context2.next = 3;return (
              _setup.server.
              get("".concat(_setup.BASE_URL, "/posts")).
              expect(500));case 3:case "end":return _context2.stop();}}}, _callee2);})));

});
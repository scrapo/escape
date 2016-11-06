const assert = require('assert');
const escape = require('../escape');

suite('escape', function () {
	suite('regExp', function () {
		test('with special chars returns escaped string', function () {
			assert.equal(escape.regExp('[]{}-^$'), '\\[\\]\\{\\}\\-\\^\\$');
		});
		test('with special chars returns escaped string', function () {
			assert.equal(escape.regExp('[A-Za-z0-9]{}-^$'), '\\[A\\-Za\\-z0\\-9\\]\\{\\}\\-\\^\\$');
		});
		test('with special chars returns escaped string', function () {
			assert.equal(escape.regExp('[A-Za-z0-9]*?{}-^$'), '\\[A\\-Za\\-z0\\-9\\]\\*\\?\\{\\}\\-\\^\\$');
		});
	});
});
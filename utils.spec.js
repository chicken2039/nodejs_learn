//spec가 붙으면 테스트 코드
const utils = require('./utils');
//const assert = require('assert');
//슈드로 교체
const should = require('should');

describe('utils.js 모듈의 capitalize 함수는',()=>{
    it('문자열의 첫번째 문자를 대문자로 변환한다.',()=>{
        const result = utils.capitalize('hello');
        //assert.equal(result,'Hello');
        //슈드로 교체
        result.should.be.equal('Hello');

    })
});
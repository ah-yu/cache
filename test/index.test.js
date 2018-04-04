'use strict'

const assert = require('assert');
const Cache = require('../index');

let testCache = new Cache(100000);

describe('check lru cache', () => {
    beforeEach(() => {
        testCache.set('one', 'oneone');
        testCache.set('two', 'twotwo');
    });

    afterEach(() => {
        testCache.cleanup();
    });

    it('chack get func', () => {
        assert.equal(testCache.get('one'), 'oneone');
    });

    it('check set func', () => {
        testCache.set('test', 'testtest');
        assert.equal(testCache.get('test'), 'testtest');
    })

    it('check cleanup func', () => {
        testCache.cleanup();
        assert(!testCache.get('one'));
        assert(!testCache.get('two'));
    })
})
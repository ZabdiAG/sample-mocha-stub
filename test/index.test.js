/* globals describe it */

const assert = require('assert')
const Stubbing = require('../index')
const sinon = require('sinon')

describe('Class Stubbing', () => {
  describe('run', () => {
    it('should return no', done => {
      let stubbing = new Stubbing()
      let stub = sinon.stub(stubbing, '_mochThisOne', () => {
        return null
      })
      assert(stubbing.run() === 'no')
      done()
    })
  })
})

/* globals describe it */

const assert = require('assert')
const Stubbing = require('../index')
const sinon = require('sinon')
const Promise = require('bluebird')

describe('Class Stubbing', () => {
  describe('run', () => {
    it('should return no', done => {
      let stubbing = new Stubbing()
      // TODO: stub _mochThisOne method
      sinon.stub(stubbing, '_mochThisOne', () => {
        return new Promise((resolve, reject) => {
          resolve(this.affected = 'no')
        })
      })

      stubbing.run((val) => {
        assert(this.affected === 'no')
        done()
      })
    }).timeout(5000)
  })
})

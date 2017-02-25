/* globals describe it */

const assert = require('assert')
const Stubbing = require('../index')
const sinon = require('sinon')

describe('Class Stubbing', () => {
  describe('run', () => {
    it('should return no', done => {
      let stubbing = new Stubbing()
      // TODO: stub _mochThisOne method
      stubbing.run((val) => { console.log(val) })
    }).timeout(5000)
  })
})

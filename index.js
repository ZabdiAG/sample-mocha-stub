const Promise = require('bluebird')

class Stubbing {
  constructor (params = {}) {
    this.affected = 'no'
  }

  run (cb) {
    return Promise.try(() => {
      return this._mochThisOne()
        .then(cb)
    })
  }

  _mochThisOne () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.affected = 'yes')
      }, 3000)
    })
  }
}
module.exports = Stubbing

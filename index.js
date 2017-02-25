class Stubbing {
  constructor (params = {}) {
    this.affected = 'no'
  }

  run () {
    this._mochThisOne()
    return this.affected
  }

  _mochThisOne () {
    this.affected = 'yes it is'
  }
}
module.exports = Stubbing

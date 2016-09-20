import Parse from 'parse'

class Thing extends Parse.Object {
  constructor () {
    super('Thing')
  }
}

Parse.Object.registerSubclass('Thing', Thing);
export default Thing

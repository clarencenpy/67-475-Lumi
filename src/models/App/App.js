import Parse from 'parse'

class App extends Parse.Object {
  constructor () {
    super('App')
  }
}

Parse.Object.registerSubclass('App', App);
export default App

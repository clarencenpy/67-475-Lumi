import Parse from 'parse'

class <%= pascalEntityName %> extends Parse.Object {
  constructor () {
    super('<%= pascalEntityName %>')
  }
}

Parse.Object.registerSubclass('<%= pascalEntityName %>', <%= pascalEntityName %>);
export default <%= pascalEntityName %>

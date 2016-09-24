import { injectReducer } from '../../store/reducers'


export default (store) => {

  const CoreLayout = require('./containers/CoreLayoutContainer').default
  const reducer = require('./modules/CoreLayout').default
  injectReducer(store, { key: 'coreData', reducer })
  return CoreLayout
}

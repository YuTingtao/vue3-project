import error from './modules/error.js'
import permission from './modules/permission.js'

function importDirectives(app) {
  app.directive('error', error)
  app.directive('permission', permission)
}

export default importDirectives
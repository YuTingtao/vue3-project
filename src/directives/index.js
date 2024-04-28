import error from './modules/error.js'
import permission from './modules/permission.js'

function importDirectives(app) {
  app.directive('error', error)
  app.directive('perm', permission)
}

export default importDirectives
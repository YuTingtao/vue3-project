import error from './modules/error.js'

function importDirectives(app) {
  app.directive('error', error)
}

export default importDirectives
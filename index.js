
if (typeof document !== 'undefined') {
  module.exports = document
} else {
  var undom = require('undom')
  module.exports = undom()
}

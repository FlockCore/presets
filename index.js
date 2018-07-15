var extend = require('xtend')

var DWEB_DOMAIN = 'dweb.local'
var DEFAULT_REVELATION = [
  'revelation1.dwebs.io:6620',
  'revelation2.dwebs.io:6620',
  'revelation3.dwebs.io:6620',
  'revelation4.dwebs.io:6620',
]
var DEFAULT_BOOTSTRAP = [
  'bootstrap1.dwebs.io:6881',
  'bootstrap2.datprotocol.com:6881',
  'bootstrap3.datprotocol.com:6881',
  'bootstrap4.datprotocol.com:6881'
]

var DEFAULT_OPTS = {
  dns: {server: DEFAULT_REVELATION, domain: DWEB_DOMAIN},
  dht: {bootstrap: DEFAULT_BOOTSTRAP}
}

module.exports = function (opts) {
  return extend(DEFAULT_OPTS, opts) // opts takes priority
}

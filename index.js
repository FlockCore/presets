var extend = require('xtend')

var DWEB_DOMAIN = 'dweb.local'
var DEFAULT_REVELATION = [
  'revelation1.dwebs.io',
  'revelation2.dwebs.io',
  'revelation3.dwebs.io',
  'revelation4.dwebs.io',
  'revelation5.dwebs.io',
  'revelation6.dwebs.io',
  'revelation7.dwebs.io'
]
var DEFAULT_BOOTSTRAP = [
  'bootstrap1.dwebs.io:6620',
  'bootstrap2.dwebs.io:6620',
  'bootstrap3.dwebs.io:6620',
  'bootstrap4.dwebs.io:6620',
  'bootstrap5.dwebs.io:6620',
  'bootstrap6.dwebs.io:6620',
  'bootstrap7.dwebs.io:6620'
]

var DEFAULT_OPTS = {
  dns: {server: DEFAULT_REVELATION, domain: DWEB_DOMAIN},
  dht: {bootstrap: DEFAULT_BOOTSTRAP}
}

module.exports = function (opts) {
  return extend(DEFAULT_OPTS, opts) // opts takes priority
}

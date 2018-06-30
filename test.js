var test = require('tape')
var flockRevelation = require('@flockcore/revelation')
var flockPresets = require('.')

test('two flocks connect and exchange data with defaults', function (t) {
  var presets = flockPresets() // no opts
  var revServerA = flockRevelation(presets)
  var revServerB = flockRevelation(presets)

  revServerA.on('connection', function (connection) {
    connection.write('greetings')
    connection.on('data', function (data) {
      revServerA.destroy()
      revServerB.destroy()
      t.same(data, Buffer.from('greetings'))
      t.end()
    })
  })

  revServerB.on('connection', function (connection) {
    connection.pipe(connection)
  })

  revServerA.join('test')
  revServerB.join('test')
})

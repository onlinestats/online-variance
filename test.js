var test = require('tape')
var Variance = require('./index')

var values = [1, 3, 5, NaN, 'Bob', '6', 8]

test('Population variance: NaN and Strings', (_) => {
  var variance = Variance()
  values.forEach(v => { variance(v) })
  console.log(variance())
  _.true(variance() - 5.84 < 0.0000001)
  _.end()
})

test('Sample variance: NaN and Strings', (_) => {
  var variance = Variance({ddof: 1})
  values.forEach(v => { variance(v) })
  console.log(variance())
  _.true(variance() - 7.3 < 0.0000001)
  _.end()
})

test('Population variance: 100000 numbers (0,100000), int: 1', (_) => {
  var variance = Variance()
  for (var i = 0; i <= 100000; i++) {
    variance(i)
  }
  console.log(variance())
  _.true(variance() - 833350000.0 < 0.0000001)
  _.end()
})

test('Sample variance: 100000 numbers (0,100000), int: 1', (_) => {
  var variance = Variance({ddof: 1})
  for (var i = 0; i <= 100000; i++) {
    variance(i)
  }
  console.log(variance())
  _.true(variance() - 833358333.5 < 0.0000001)
  _.end()
})

/*
test('1 million numbers (0,100000), int: 0.1, err < 0.1', (_) => {
  var mean = Mean()
  for (var i = 0; i <= 100000; i += 0.1) {
    mean(i)
  }
  console.log(mean())
  _.true(mean() - 50000 < 0.1, 'Floating point cumulative error is quite high when N is big')
  _.end()
})

test('1 million numbers (100000, 0), int: 0.1, err < 0.1', (_) => {
  var mean = Mean()
  for (var i = 100000; i >= 0; i -= 0.1) {
    mean(i)
  }
  console.log(mean())
  _.true(mean() - 50000 < 0.1, 'Floating point cumulative error is quite high when N is big')
  _.end()
})
*/

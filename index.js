module.exports = function (params) {
  if (!params) params = {}

  var n = 0
  var mean = 0
  var m2 = 0
  var variance = 0
  var ddof = params.ddof || 0

  return function (x) {
    if (!isNaN(x)) {
      if (typeof x !== 'number') {
        x = parseFloat(x)
      }
      n += 1
      var delta = x - mean
      mean = mean + delta / n
      m2 = m2 + delta * (x - mean)
      if (n > 1) {
        variance = m2 / (n - ddof)
      }
    }
    return variance
  }
}

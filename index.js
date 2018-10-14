module.exports = function (params) {
  if (!params) params = {}

  var n = 0
  var mean = 0
  var m2 = 0
  var value = 0
  var ddof = params.ddof || 0

  var variance = function variance (x, seriesObject) {
    if (!isNaN(x)) {
      if (typeof x !== 'number') {
        x = parseFloat(x)
      }
      n += 1
      var delta = x - mean
      mean = mean + delta / n
      m2 = m2 + delta * (x - mean)
      if (n > 1) {
        value = m2 / (n - ddof)
      }
    }
    return value
  }

  Object.defineProperty(variance, 'value', {
    get: function () {
      return value
    }
  })

  Object.defineProperty(variance, 'n', {
    get: function () {
      return n
    }
  })

  return variance
}

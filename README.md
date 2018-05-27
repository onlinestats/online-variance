# online-variance
Online variance calculation (piece-by-piece)
Based on online Welford's algorithm

## Usage

```
const Variance = require('online-variance')
const v = Variance()
;[1,2,3,4,5].forEach(value => { v(value) })

console.log('Population variance:', v()) // -> 2

```

### Population vs Sample variance
Use a parameter `ddof: 1` to calculate sample variance

```
const Variance = require('online-variance')
const v = Variance({ddof: 1}) // Delta degrees of freedom. The divisor used in calculations (N - ddof), where N - number of elements
;[1,2,3,4,5].forEach(value => { v(value) })

console.log('Sample variance:', v()) // -> 2.5
```


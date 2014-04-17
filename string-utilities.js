var curry = require('lodash.curry');

//+ insert :: String -> Char -> Char -> Int -> String
var insert = curry(function (s, c, index_char, i) {
      if (i > 0) { return s.slice(0, i) + c + s.slice(i, s.length); }
      else { return c + s; }
    })

module.exports = {
  insert: insert
}

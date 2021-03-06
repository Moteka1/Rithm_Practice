// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // map s to t in a hash table
  // only map char once!
  // rebuild string with new chars
  let hash = {};
  let newStr = '';
  for (let i = 0; i < s.length; i++) {
      if (!hash[s[i]]) {
          hash[s[i]] = t[i];
      }
  }
  // check if has values are unique
  let hashValues = Object.values(hash);  
  if (new Set(hashValues).size !== hashValues.length) {
    return false;
  }
  // get all object values
  for (let char of s) {
      newStr += hash[char];
  }
  console.log(newStr, t, s)
  console.log(hash)
  return newStr === t;
};

console.log(isIsomorphic('ab', 'aa'));

// model solution
function isIsoModel(s, t) {
  let ltrMap = {};
  let values = new Set;
  for (let i = 0; i < s.length; i++) {
    let sLet = s[i];
    let tLet = t[i];

    // if letter in s is already mapped to a different letter in t
    if (ltrMap[sLet] && ltrMap[sLet] !== tLet) return false;
    
    // letter in s isn't mapped yet, but letter in t is already taken
    if (!ltrMap[sLet] && values.has(tLet)) return false;

    // record new mapping, if there is one
    ltrMap[sLet] = ltrMap[sLet] || tLet;
    values.add(ltrMap[sLet]);
  }
  return true;
}

console.log(isIsoModel('ab', 'aa'));
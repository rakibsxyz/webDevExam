function longestRepetition (str) {
  if (str.length === 0) {
     return ['', 0]
  }
  let longest = '';
  let chunk = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] === str[i + 1]) {
        chunk += str[i];
      }
    }
    if (i > 0) {
      if (str[i] === str[i - 1]) {
        chunk += str[i];
        
      }
      if (str[i] !== str[i - 1]) {
        chunk = str[i];
      }
      if (chunk.length > longest.length) {
        longest = chunk;
      }
    }
  }
  return [longest[0], longest.length];
}

var  results = longestRepetition("bbbaaabaaaa")
var stringResult =""
for (let i = 0; i <results[1] ; i++) {
  stringResult +=results[0] 
 
} 
console.log(stringResult)

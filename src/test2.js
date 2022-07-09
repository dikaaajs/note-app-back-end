const ages = {'a':32,'b': 33,'c': 16,'d': 40};
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);
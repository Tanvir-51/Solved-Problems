function template(strings, ...keys){
  console.log(strings);
  console.log(keys);
  
  return function(...values){
    let dict = values[values.length - 1] || {};
    let results = [strings[0]];

    keys.forEach(function(key,i){
      var value = Number.isInteger(key) ? values[key] :  dict[key];
      results.push(value,strings[i + 1]);
    })
  }
}

let t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y','A'));

let t2Closure = template`${0} ${'foo'}`;
console.log(t2Closure('Hello', {foo: 'World'}));
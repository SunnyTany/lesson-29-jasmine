function ageClassification(n) {
  let age = (n > -1 && n <= 24) ? 
    'детский возраст' : 
    (n > 24 && n <= 44) ? 
    'молодой возраст' :
    (n > 44 && n <= 65) ?
    'средний возраст' : 
    (n > 65 && n <= 75) ?
    'пожилой возраст' :
    (n > 75 && n <= 90) ?
    'старческий возраст' :
    (n > 90 && n <= 122) ?
    'долгожители' : 
    null;
    return age;
}


function myMax(arr) {
  return Math.max.apply(null, arr);
}
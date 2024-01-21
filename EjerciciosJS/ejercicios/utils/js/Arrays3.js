const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a,b)=>a-b)

console.log(Math.max(...ages));

  console.log(Math.min(...ages));

  let sum = 0;
  ages.forEach(function(element) {
    sum += element;
  });
  let media = sum / ages.length;
  console.log("La media es: " + media);
let array = []

for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random()*100));
  }

  for (let i = 0; i < array.length; i++) {
    if(array[i]%2==0){
        console.log(array[i]);
    }

  }

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log(Math.max(...array));

  console.log(Math.min(...array));

  let sum = 0;
  array.forEach(function(element) {
    sum += element;
  });
  let media = sum / array.length;
  console.log("La media es: " + media);
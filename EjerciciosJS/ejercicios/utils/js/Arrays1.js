let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  array.forEach(function(element) {
    console.log(element);
  });
  array.forEach(function(element) {
    console.log(element + 1);
  });
  let sum = 0;
  array.forEach(function(element) {
    sum += element;
  });
  let media = sum / array.length;
  console.log("La media es: " + media);
        
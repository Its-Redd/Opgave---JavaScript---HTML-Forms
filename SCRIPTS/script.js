let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#form2');
let form3 = document.querySelector('#form3');
let form4 = document.querySelector('#form4');

form1.addEventListener('submit', function (e) {
  e.preventDefault();
  let firstName1 = document.querySelector('#firstName1');
  let lastName1 = document.querySelector('#lastName1');
  console.log('Opgave 1:');
  alert(firstName1.value + ' ' + lastName1.value);
  firstName1.value = '';
  lastName1.value = '';
});

form2.addEventListener('submit', function (e) {
  e.preventDefault();
  let number1 = document.querySelector('#number1');
  let number2 = document.querySelector('#number2');
  console.log('Opgave 2:');
  alert(parseInt(number1.value) + parseInt(number2.value));
  number1.value = '';
  number2.value = '';
});

form3.addEventListener('submit', function (e) {
  e.preventDefault();
  let number3 = document.querySelector('#price1');
  console.log('Opgave 3:');
  number3 = parseInt(number3.value);
  let temp = number3 / 4;
  number3 = number3 + temp;
  let temp2 = number3 / 10;
  number3 = number3 - temp2;
  let result = document.querySelector('#result');
  result.value = number3;
});

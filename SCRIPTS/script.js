let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#form2');
let form3 = document.querySelector('#form3');
let form4 = document.querySelector('#form4');

form1.addEventListener('submit', function (e) {
  e.preventDefault();
  let firstName1 = document.querySelector('#firstName1');
  let lastName1 = document.querySelector('#lastName1');
  console.log('Opgave 1:');
  console.log(firstName1.value + ' ' + lastName1.value);
  firstName1.value = '';
  lastName1.value = '';
});

form2.addEventListener('submit', function (e) {
  e.preventDefault();
  let number1 = document.querySelector('#number1');
  let number2 = document.querySelector('#number2');
  console.log('Opgave 2:');
  console.log(parseInt(number1.value) + parseInt(number2.value));
  number1.value = '';
  number2.value = '';
});

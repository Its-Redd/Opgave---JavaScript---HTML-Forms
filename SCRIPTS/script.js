let form1 = document.querySelector('#form1');

form1.addEventListener('submit', function (e) {
  e.preventDefault();
  let firstName1 = document.querySelector('#firstName1');
  let lastName1 = document.querySelector('#lastName1');
  console.log('Opgave 1:');
  console.log(firstName1.value + ' ' + lastName1.value);
  firstName1.value = '';
  lastName1.value = '';
});

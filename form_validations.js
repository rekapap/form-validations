function validateEmail(emailString){
  if(emailString === "") return false;

  let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{1,63}(?:\.([a-zA-Z0-9-]){1,63})+$/;
  let match = emailRegExp.test(emailString);
  if(!match) return false;

  return true;
}

function validateForm() {
  let mail = document.getElementById('mail');
  let formValidity = false;

  if (validateEmail(mail.value)) formValidity = true;
  console.log(formValidity);

  return formValidity;
}

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
  event.preventDefault();
  validateForm();
});
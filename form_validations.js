function validateForm() {
  let formValidity = false;

  return formValidity;
}

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
  event.preventDefault();
  validateForm();
});
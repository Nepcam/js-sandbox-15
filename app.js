// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2, 10}$/;

  if(!re.test(name.vale)){                    // Using the test() method
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');      // Using the remove() method 
  }
}

function validateZip() {
  
}

function validateEmail() {
  
}

function validatePhone() {
  
}
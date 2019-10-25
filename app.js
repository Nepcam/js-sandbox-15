// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('post').addEventListener('blur', validatePost);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2, 10}$/;

  if(!re.test(name.vale)){                    // Using the test() method to see what the condition is
    name.classList.add('is-invalid');         // Then using the add() add depending on the condtion or else 
  } else {
    name.classList.remove('is-invalid');      // Using the remove() method to see what the condition is and change
  }
}

function validatePost() {
  const post = document.getElementById('post');
  const re = /^[0-9]{4}?$/;

  if(!re.test(post.vale)){                    // Using the test() method to see what the condition is
    post.classList.add('is-invalid');         // Then using the add() add depending on the condtion or else 
  } else {
    post.classList.remove('is-invalid');      // Using the remove() method to see what the condition is and change
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.vale)){                    // Using the test() method to see what the condition is
    email.classList.add('is-invalid');         // Then using the add() add depending on the condtion or else 
  } else {
    email.classList.remove('is-invalid');      // Using the remove() method to see what the condition is and change
  }
}

function validatePhone() {
  
}
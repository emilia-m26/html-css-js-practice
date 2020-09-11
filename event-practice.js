console.log('it works');

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
});
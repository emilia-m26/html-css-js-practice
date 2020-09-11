console.log('it works');

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
});

const falcor = document.querySelector('img');
console.log(falcor);

falcor.addEventListener('click', function(event){
    console.log("You scratched behind falcor's ear!");
    console.log(event.currentTarget);
})
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');






//utility function
function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if(item === not) {
    //recursion
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  //console.log(joke);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
//fetchJoke();
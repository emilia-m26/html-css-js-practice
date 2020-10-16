const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');








async function handleClick() {
  const { joke } = await fetchJoke(loader);
  //console.log(joke);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
//fetchJoke();
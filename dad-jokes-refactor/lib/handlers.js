import { fetchJoke } from './index.js';

export async function handleClick(loader) {
    const { joke } = await fetchJoke(loader);
    //console.log(joke);
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
  }
  
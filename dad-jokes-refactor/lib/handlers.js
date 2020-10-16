export async function handleClick() {
    const { joke } = await fetchJoke(loader);
    //console.log(joke);
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
  }
  
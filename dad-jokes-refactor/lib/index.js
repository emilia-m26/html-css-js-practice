//core to what application does - library

export async function fetchJoke(loader) {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      }
    });
    const data = await response.json();
    return data;
  }
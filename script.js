const btn = document.getElementById("jokeBtn");
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");

btn.addEventListener("click", async () => {
  btn.disabled = true;
  btn.textContent = "Loading...";
  setupEl.textContent = "";
  punchlineEl.textContent = "";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    setupEl.textContent = data.setup;

    setTimeout(() => {
      punchlineEl.textContent = data.punchline;
    }, 1500);
  } catch (error) {
    setupEl.textContent = "Oops, couldn't fetch a joke. Check your internet and try again.";
  } finally {
    btn.disabled = false;
    btn.textContent = "Get another joke";
  }
});
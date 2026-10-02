const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", async () => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  console.log(data);
});

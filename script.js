// script.js
async function loadMovies() {
  const res = await fetch("movies.json");
  const movies = await res.json();
  renderMovies(movies);
}

function renderMovies(movies) {
  const container = document.querySelector(".row-posters");
  container.innerHTML = "";

  movies.forEach((movie) => {
    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
    container.appendChild(img);
  });
}

document.getElementById("search").addEventListener("input", async (e) => {
  const query = e.target.value.toLowerCase();
  const res = await fetch("movies.json");
  const movies = await res.json();

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(query)
  );
  renderMovies(filtered);
});

loadMovies();

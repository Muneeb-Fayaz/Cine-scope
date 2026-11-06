const movies = [
  {title:"Interstellar",year:2014,genre:"Sci-Fi",rating:"8.7",icon:"✦",description:"A team travels beyond our galaxy in search of a future for humanity."},
  {title:"The Pursuit of Happyness",year:2006,genre:"Drama",rating:"8.0",icon:"☀",description:"A father refuses to give up while building a better life for his son."},
  {title:"Shutter Island",year:2010,genre:"Thriller",rating:"8.2",icon:"◈",description:"An investigation on a remote island becomes a mind-bending mystery."},
  {title:"The Martian",year:2015,genre:"Sci-Fi",rating:"8.0",icon:"◎",description:"An astronaut uses science and stubborn optimism to survive on Mars."},
  {title:"Into the Wild",year:2007,genre:"Adventure",rating:"8.0",icon:"⌁",description:"A young traveller leaves comfort behind to discover the open world."},
  {title:"The Green Mile",year:1999,genre:"Drama",rating:"8.6",icon:"❖",description:"A prison guard encounters a prisoner with an extraordinary gift."}
];

let activeGenre = "All";
const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");

function renderMovies() {
  const search = searchInput.value.toLowerCase().trim();
  const visibleMovies = movies.filter(movie => {
    const matchesGenre = activeGenre === "All" || movie.genre === activeGenre;
    const matchesSearch = movie.title.toLowerCase().includes(search);
    return matchesGenre && matchesSearch;
  });

  grid.innerHTML = visibleMovies.map(movie => `
    <article class="movie-card">
      <div class="poster" aria-hidden="true">${movie.icon}</div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="meta"><span>${movie.year}</span><span class="genre">${movie.genre}</span><span>★ ${movie.rating}</span></div>
        <p>${movie.description}</p>
      </div>
    </article>
  `).join("");

  document.getElementById("resultCount").textContent =
    `${visibleMovies.length} ${visibleMovies.length === 1 ? "title" : "titles"}`;
  document.getElementById("emptyMessage").hidden = visibleMovies.length !== 0;
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    activeGenre = button.dataset.genre;
    renderMovies();
  });
});

searchInput.addEventListener("input", renderMovies);
renderMovies();

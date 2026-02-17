const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const cardsEl = document.getElementById("cards");
const searchInput = document.getElementById("search-input");

const renderCards = (items) => {
  cardsEl.textContent = "";

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No robots found.";
    empty.style.fontSize = "18px";
    empty.style.color = "#ffffff";
    cardsEl.appendChild(empty);
    return;
  }

  items.forEach((robot) => {
    const card = document.createElement("article");
    card.className = "card";

    const inner = document.createElement("div");
    inner.className = "card-inner";

    const avatar = document.createElement("div");
    avatar.className = "avatar";

    const img = document.createElement("img");
    img.src = robot.image;
    img.alt = `${robot.name} avatar`;
    img.loading = "lazy";

    const name = document.createElement("h2");
    name.textContent = robot.name;

    const email = document.createElement("p");
    email.textContent = robot.email;

    avatar.appendChild(img);
    inner.appendChild(avatar);
    inner.appendChild(name);
    inner.appendChild(email);
    card.appendChild(inner);

    cardsEl.appendChild(card);
  });
};

const handleSearch = (event) => {
  const query = event.target.value.toLowerCase().trim();
  const filtered = robots.filter((robot) =>
    robot.name.toLowerCase().includes(query)
  );
  renderCards(filtered);
};

renderCards(robots);
searchInput.addEventListener("input", handleSearch);

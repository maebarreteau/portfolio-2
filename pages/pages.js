document.querySelectorAll('.fill').forEach(bar => {
  bar.style.width = bar.getAttribute('data-level');
});

document.querySelectorAll('.skill').forEach(skill => {
  const toggle = skill.querySelector('.skill-toggle');
  const desc = skill.querySelector('.skill-desc');

  skill.addEventListener('click', () => {
    toggle.classList.toggle('open');
    desc.classList.toggle('show');
  });
});

 const descBox = document.querySelector('.tag-desc');

  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      descBox.textContent = tag.getAttribute('data-desc');
      descBox.classList.add('show');
    });
  });

  document.querySelectorAll('.archive-card').forEach(card => {
  const toggle = card.querySelector('.accordion-toggle');
  const content = card.querySelector('.archive-content');
  const arrow = card.querySelector('.arrow-icon'); 

  toggle.addEventListener('click', () => {
    content.classList.toggle('open');
    arrow.classList.toggle('open'); 
  });
});

    document.querySelectorAll('.fill').forEach(bar => {
      const level = bar.dataset.level;
      if (level === "1") bar.style.width = "60%";
      if (level === "2") bar.style.width = "75%";
      if (level === "3") bar.style.width = "90%";
      if (level === "4") bar.style.width = "100%";
    });

   

var map = L.map('map').setView([45.7772, 3.0870], 13);


L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);


var places = [
  { name: "Momie Manga", coords: [45.7793018873103, 3.0821177418489007], desc: "se perdre entre les étalages" },
  { name: "Le Lieu-Dit", coords: [45.780810835834, 3.0817325398442916], desc: "sans cesse de nouvelles découvertes" },
  { name: "Le Baraka Shop/Bar", coords: [45.78135191740248, 3.0833816505098564], desc: "des jeux à ne plus savoir à quoi jouer" },
  { name: "Les Volcans", coords: [45.77149379972175, 3.0854982945799434], desc: "ma librairie coup de cœur" },
  { name: "Le Grenier des Chimères", coords: [45.77806129104986, 3.083679411008357], desc: "partir dans de nouveaux univers" },
  { name: "La Coopérative de Mai", coords: [45.78836669449997, 3.1000919964229157], desc: "là où la musique gagne" }
];

var markers = {};
var listItems = document.querySelectorAll("#place-list li");


places.forEach(function(place) {
  var marker = L.marker(place.coords).addTo(map)
    .bindPopup("<strong>" + place.name + "</strong><br>" + place.desc);

  markers[place.name] = marker;

  marker.on("click", function() {
    highlight(place.name);
  });
});

function highlight(name) {
  listItems.forEach(li => li.classList.remove("active"));
  var activeItem = document.querySelector('[data-place="' + name + '"]');
  activeItem.classList.add("active");

  map.flyTo(markers[name].getLatLng(), 16, { duration: 0.8 });
  markers[name].openPopup();
}


listItems.forEach(li => {
  li.addEventListener("click", () => {
    highlight(li.dataset.place);
  });
});


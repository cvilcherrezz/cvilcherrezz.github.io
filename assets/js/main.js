console.log("Portfolio loaded");

async function loadComponent(id, file) {
  const response = await fetch(file);
  document.getElementById(id).innerHTML = await response.text();
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");

fetch("data/projects.json")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects");
    projects.forEach(p => {
      container.innerHTML += `<h3>${p.title}</h3>`;
    });
  });

console.log("Portfolio components loaded");
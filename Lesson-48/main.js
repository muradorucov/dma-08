const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();

  if (!query) {
    results.innerHTML = "<p class='text-gray-400'>Zəhmət olmasa söz daxil edin.</p>";
    return;
  }

  fetch(`https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${query}`)
    .then(res => res.json())
    .then(data => {
      results.innerHTML = "";

      data.hits.forEach(img => {
        const div = document.createElement("div");
        div.className = "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition";
        div.innerHTML = `
          <img src="${img.webformatURL}" alt="${img.tags}" class="w-full h-48 object-cover">
        `;
        results.appendChild(div);
      });
    })
});
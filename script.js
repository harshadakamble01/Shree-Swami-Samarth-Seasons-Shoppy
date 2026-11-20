const products = [
  {name:"Jacket Saree", category:"Jacket Saree", fabric:"Designer • Contemporary", color:"Black & Gold", design:"Embroidered", image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80", tag:"Statement style"},
  {name:"Poncho Saree", category:"Poncho Saree", fabric:"Fusion • Lightweight", color:"Pink", design:"Modern", image:"https://images.unsplash.com/photo-1583391733956-6c78276477e0?auto=format&fit=crop&w=700&q=80", tag:"Fusion edit"},
  {name:"Net Saree", category:"Net Saree", fabric:"Net • Embellished", color:"Blush Pink", design:"Embroidered", image:"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80", tag:"Party favourite"},
  {name:"Silk Saree", category:"Silk Saree", fabric:"Silk • Traditional", color:"Royal Blue", design:"Woven", image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80", tag:"Timeless classic"},
  {name:"Trendy Saree", category:"Trendy Saree", fabric:"Georgette • Trendy", color:"Lavender", design:"Contemporary", image:"https://images.unsplash.com/photo-1583391733956-6c78276477e0?auto=format&fit=crop&w=700&q=80", tag:"New trend"},
  {name:"Kathpadar Saree", category:"Kathpadar Saree", fabric:"Traditional • Woven", color:"Green & Red", design:"Kathpadar", image:"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80", tag:"Traditional pick"},
  {name:"Paithani Saree", category:"Paithani Saree", fabric:"Silk • Paithani", color:"Purple & Gold", design:"Peacock motif", image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80", tag:"Heritage edit"},
  {name:"Organza Saree", category:"Organza Saree", fabric:"Organza • Lightweight", color:"Pastel", design:"Floral", image:"https://images.unsplash.com/photo-1583391733956-6c78276477e0?auto=format&fit=crop&w=700&q=80", tag:"Soft elegance"},
  {name:"Ready-to-Wear Saree", category:"Ready-to-Wear Saree", fabric:"Pre-draped • Easy wear", color:"Black", design:"Modern", image:"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80", tag:"Easy drape"},
  {name:"Ruffle Saree", category:"Trendy Saree", fabric:"Georgette • Ruffle", color:"Peach", design:"Ruffle", image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80", tag:"Playful detail"},
  {name:"Banarasi Saree", category:"Silk Saree", fabric:"Banarasi Silk", color:"Maroon & Gold", design:"Woven zari", image:"https://images.unsplash.com/photo-1583391733956-6c78276477e0?auto=format&fit=crop&w=700&q=80", tag:"Festive classic"},
  {name:"Sequin Saree", category:"Net Saree", fabric:"Net • Sequin", color:"Silver", design:"Shimmer", image:"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80", tag:"Evening edit"}
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
let activeCategory = "All";

function renderProducts(){
  const term = searchInput.value.trim().toLowerCase();
  const filtered = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const searchable = `${p.name} ${p.category} ${p.fabric} ${p.color} ${p.design} pack neck high neck blouse`.toLowerCase();
    return matchesCategory && searchable.includes(term);
  });
  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name} saree style inspiration" loading="lazy" onerror="this.style.display='none'">
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.fabric}<br>${p.color} • ${p.design}</p>
        <div class="product-meta"><span>PACK-NECK BLOUSE LOOK</span><span>✧</span></div>
      </div>
    </article>`).join("");
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "style" : "styles"} found`;
  noResults.hidden = filtered.length !== 0;
}
document.querySelectorAll(".filter-chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-chip.active")?.classList.remove("active");
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});
searchInput.addEventListener("input", renderProducts);
clearSearch.addEventListener("click", () => { searchInput.value = ""; renderProducts(); searchInput.focus(); });
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();

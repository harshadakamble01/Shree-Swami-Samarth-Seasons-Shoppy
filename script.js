const products = [
  {name:"Jacket Saree", category:"Jacket Saree", fabric:"Dola Silk • Jacket style", color:"Navy Blue", design:"Embroidered jacket", image:"https://pictures.kartmax.in/live/inside/800x800/sites/9s145MyZrWdIAwpU0JYS/product-images/navy_blue_dola_silk_designer_ready_to_wear_saree_with_jacket_style_1778230281_AS3673280_1_02.jpeg", tag:"Statement style"},
  {name:"Poncho Saree", category:"Poncho Saree", fabric:"Chiffon • Poncho style", color:"Pastel Pink", design:"Embroidered poncho", image:"https://img.perniaspopupshop.com/catalog/product/s/u/SUPG082302_1.jpg?impolicy=zoomimage", tag:"Fusion edit"},
  {name:"Net Saree", category:"Net Saree", fabric:"Net • Embellished", color:"Cream & Gold", design:"Fine embroidery", image:"https://assets2.andaazfashion.com/media/catalog/product/n/e/net-party-wear-saree-in-cream-color-sarv07292.jpg", tag:"Party favourite"},
  {name:"Silk Saree", category:"Silk Saree", fabric:"Silk • Traditional", color:"Bright Green", design:"Woven zari", image:"https://www.bivusha.in/cdn/shop/files/KRI_1145.webp?v=1758913927&width=1024", tag:"Timeless classic"},
  {name:"Trendy Saree", category:"Trendy Saree", fabric:"Georgette • Modern", color:"Doctor Blue", design:"Cape-inspired drape", image:"https://cdn.shopaccino.com/onayafashions/products/1-348910_l.jpg?v=566", tag:"New trend"},
  {name:"Kathpadar Saree", category:"Kathpadar Saree", fabric:"Traditional • Woven", color:"Cream & Red", design:"Traditional border", image:"https://www.wholesaletextile.in/download-catalogue-pdf?21685=", tag:"Traditional pick"},
  {name:"Paithani Saree", category:"Paithani Saree", fabric:"Soft Silk • Paithani", color:"Off White", design:"Floral pallu", image:"https://dhanaspaithani.com/cdn/shop/files/200_fa34d8ee-f9e3-490b-a84b-bfd1c8799fea.jpg?v=1756883848&width=1024", tag:"Heritage edit"},
  {name:"Organza Saree", category:"Organza Saree", fabric:"Organza • Lightweight", color:"Ivory", design:"Floral embellishment", image:"https://img.perniaspopupshop.com/catalog/product/s/w/SWNA092207_1.jpg?impolicy=zoomimage", tag:"Soft elegance"},
  {name:"Ready-to-Wear Saree", category:"Ready-to-Wear Saree", fabric:"Pre-draped • Easy wear", color:"Ivory & Blue", design:"Jacket drape", image:"https://svacouture.com/cdn/shop/files/9000003900.1262.jpg?v=1751907330", tag:"Easy drape"},
  {name:"Ruffle Saree", category:"Ruffle Saree", fabric:"Organza • Ruffle", color:"Scarlet Red", design:"Layered ruffles", image:"https://img.perniaspopupshop.com/catalog/product/s/w/SWNA092208_1.jpg?impolicy=detailimageprod", tag:"Playful detail"},
  {name:"Banarasi Saree", category:"Banarasi Saree", fabric:"Banarasi Silk", color:"Red & Gold", design:"Zari motifs", image:"https://cdn.shopify.com/s/files/1/0660/8250/4943/files/0K7A3368_800x.jpg?v=1745561050", tag:"Festive classic"},
  {name:"Sequin Saree", category:"Sequin Saree", fabric:"Net • Sequin", color:"Sage Green", design:"Shimmer detailing", image:"https://static.wixstatic.com/media/a7526f_4f808bb056ec465ead49eb269c3f90c4~mv2.png/v1/fill/w_900%2Ch_1390%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/a7526f_4f808bb056ec465ead49eb269c3f90c4~mv2.png", tag:"Evening edit"}
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
        <img src="${p.image}" alt="${p.name} saree catalogue reference" loading="lazy"
             onerror="this.closest('.product-image').classList.add('image-error');this.remove()">
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.fabric}<br>${p.color} • ${p.design}</p>
        <div class="product-meta"><span>PACK-NECK BLOUSE REQUEST</span><span>✧</span></div>
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

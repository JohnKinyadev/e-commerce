// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.documentElement;
//   const themeToggle = document.getElementById('themeToggle');
//   const cartToggle = document.getElementById('cartToggle');
//   const cart = document.getElementById('cart');
//   const closeCart = document.getElementById('closeCart');
//   const cartList = document.getElementById('cartList');
//   const cartCountBtn = cartToggle;
//   const productGrid = document.getElementById('productGrid');
//   const modal = document.getElementById('productModal');
//   const modalClose = modal.querySelectorAll('.modal-close');
//   const modalImage = document.getElementById('modalImage');
//   const modalTitle = document.getElementById('modalTitle');
//   const modalPrice = document.getElementById('modalPrice');
//   const modalRating = document.getElementById('modalRating');
//   const modalDesc = document.getElementById('modalDesc');

//   let cartItems = [];

//   // initialize theme
//   const stored = localStorage.getItem('site-theme');
//   if (stored === 'dark') body.setAttribute('data-theme','dark');

//   themeToggle.addEventListener('click', () => {
//     const isDark = body.getAttribute('data-theme') === 'dark';
//     if (isDark) { body.removeAttribute('data-theme'); themeToggle.setAttribute('aria-pressed','false'); localStorage.removeItem('site-theme'); }
//     else { body.setAttribute('data-theme','dark'); themeToggle.setAttribute('aria-pressed','true'); localStorage.setItem('site-theme','dark'); }
//   });

//   // cart toggle
//   cartToggle.addEventListener('click', () => {
//     const open = cart.getAttribute('aria-hidden') === 'false';
//     cart.setAttribute('aria-hidden', String(open)); // flip
//     const expanded = cartToggle.getAttribute('aria-expanded') === 'true';
//     cartToggle.setAttribute('aria-expanded', String(!expanded));
//   });
//   closeCart && closeCart.addEventListener('click', () => { cart.setAttribute('aria-hidden','true'); cartToggle.setAttribute('aria-expanded','false'); });

//   // render ratings: set CSS custom property for percentage
//   function renderRatings(root=document){
//     const ratings = root.querySelectorAll('.rating');
//     ratings.forEach(r => {
//       const val = parseFloat(r.getAttribute('data-rating') || '0') || 0;
//       const pct = Math.round((val / 5) * 100);
//       r.style.setProperty('--percent', pct + '%');
//       // also set accessible label
//       r.setAttribute('aria-label', `${val} out of 5 stars`);
//     });
//   }
//   renderRatings(document);

//   // open product modal
//   function openModalFromCard(card){
//     const title = card.dataset.title;
//     const price = card.dataset.price;
//     const image = card.dataset.image;
//     const rating = card.dataset.rating;
//     modalImage.src = image;
//     modalImage.alt = title;
//     modalTitle.textContent = title;
//     modalPrice.textContent = `$${price}`;
//     modalRating.setAttribute('data-rating', rating);
//     renderRatings(modal);
//     modal.setAttribute('aria-hidden','false');
//   }

//   productGrid.addEventListener('click', (e) => {
//     const viewBtn = e.target.closest('.view-details');
//     const addBtn = e.target.closest('.add-cart');
//     const card = e.target.closest('.product-card');
//     if (viewBtn && card) { openModalFromCard(card); }
//     if (addBtn && card) { addToCart(card.dataset); }
//   });

//   modalClose.forEach(btn => btn.addEventListener('click', () => modal.setAttribute('aria-hidden','true')));

//   // add to cart (static behavior: updates UI only)
//   function addToCart(data){
//     const id = data.id || Date.now();
//     const title = data.title || 'Product';
//     const price = Number(data.price || 0);
//     cartItems.push({id,title,price});
//     renderCart();
//   }

//   function renderCart(){
//     cartList.innerHTML = '';
//     if (cartItems.length === 0){ cartList.innerHTML = '<li class="cart-item">(Empty) — add items to see them here.</li>'; }
//     else {
//       cartItems.forEach(it => {
//         const li = document.createElement('li'); li.className = 'cart-item'; li.textContent = `${it.title} — $${it.price}`; cartList.appendChild(li);
//       });
//     }
//     const total = cartItems.reduce((s,i)=>s+i.price,0);
//     document.querySelector('.cart-total').textContent = `Total: $${total}`;
//     cartToggle.textContent = `Cart (${cartItems.length})`;
//   }

//   // expose some quick demo hooks (for testing)
//   window.__demo = { addToCart, openModalFromCard };
// });

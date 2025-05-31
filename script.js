let cart = [];

fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${p.name}</strong> - $${p.price} 
        <button onclick="addToCart('${p._id}', '${p.name}', ${p.price})">Add to cart</button>`;
      container.appendChild(div);
    });
  });

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById('cart');
  cartEl.innerHTML = '';
  cart.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartEl.appendChild(li);
  });
}

function checkout() {
  alert("Checkout - Total: $" + cart.reduce((sum, item) => sum + item.price, 0));
}

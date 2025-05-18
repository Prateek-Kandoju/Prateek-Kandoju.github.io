const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const showProducts = () => {
  const root = document.getElementById("root");
  let html = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    html +=
      "<div class='product-box'>" +
      "<h3>" + product.name + "</h3>" +
      "<p>Price: $" + product.price + "</p>" +
      "<button onclick='addToCart(" + product.id + ")'>Add to Cart</button>" +
      "</div>";
  }

  root.innerHTML = html;
};

const addToCart = (id) => {
  cart[id] = (cart[id] || 0) + 1;
  alert("Product " + id + " added to cart. Qty: " + cart[id]);
};

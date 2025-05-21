const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 0 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

function login() {
  const cardInput = document.getElementById("cardNumber").value.trim();
  const pinInput = document.getElementById("pin").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const customer = customers.find(
    (c) => c.card === cardInput && c.pin === pinInput
  );

  if (customer) {
    document.getElementById("userName").textContent = customer.name;
  } else {
    errorMsg.textContent = "Invalid card number or PIN.";
  }
}
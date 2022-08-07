function checkPrice() {
  
  const product = {
    name : null,
    amount : null,
    price : null,
    discount : null,
  }

  let name_value;
  let amount_value;
  let price_value;
  let discount_value;

  name_value = prompt("name")
  amount_value = +prompt("amount")
  price_value = +prompt("price")
  discount_value = +prompt("discount")

  product["name"] = name_value
  product["amount"] = amount_value
  product["price"] = price_value
  product["discount"] = discount_value

  if(discount_value != 0 && discount_value != "" && discount_value != null) {
    product["finalPrice"] = price_value - (price_value * discount_value)
  } else {
    return product;
  }

  return product;
}

console.log(checkPrice())
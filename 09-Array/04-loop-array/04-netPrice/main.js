/*
INPUT : ARRAY of sales (each item = obj)
OUTPUT : ARRAY of summary (each item = obj)

*/

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];


function calSummary(salesArray) {
  const summaryArray = []

  // LOGIC -> LOOP every item
  for(let item of salesArray) {
    // # 1 item =  { price: 1000, discount: 0.1 }
    // # 2 item =  { price: 500, discount: 0.05 }
    // # 3 item =  { price: 100 }

    let currentObj = {}

    // Modify Object
    let netPrice;

    if(item.discount) {
      netPrice = item.price * (1-item.discount)
    } else {
      netPrice = item.price
    }

    currentObj.netPrice = netPrice

    summaryArray.push(currentObj)
  }

  return summaryArray
}

console.log(calSummary(sales))
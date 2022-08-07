//Do myself
const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};


const clone_1 = {}

for(let key in notebook) {
  clone_1[key] = notebook[key]
}
console.log(clone_1)

const clone_2 = {}

Object.assign(clone_2, notebook)
console.log(clone_2)
const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

function checkName() {

let employeeName = prompt("name?")

if(employeeName in employees) {
  alert("Name: john, salary: 1000, address: Ratchathewi, Bangkok")
} else {
  alert("Not Found")
}

}

checkName()
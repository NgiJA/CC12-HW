let set = new Set()
set.add("Thailand")
set.add("Japan")
set.add("Thailand")
set.add("Chaina")
set.add("India")
set.add("Chaina")
set.add("Singapore")
set.add("Japan")
set.delete("India")
set.size

console.log(set)

const newArray = Array.from(set)

console.log(newArray)
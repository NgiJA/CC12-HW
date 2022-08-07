const map = new Map()

map.set("name","Thomas")
map.set("age",31)
map.set("name","Dan")
map.delete("age")
console.log(map.has("birthDate"))
console.log(map.size)
map.clear()

console.log(map)
function checkMessage(message) {
  let newMessage = message.toLowerCase()
  return (newMessage.includes("xxx") || newMessage.includes("sex") || newMessage.includes("porn"))
}

console.log(checkMessage("poRn"))
console.log(checkMessage("abc"))
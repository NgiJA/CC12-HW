function checkPermission (role, isAdmin, isNotAdmin) {
 if(role == "ADMIN") {
  isAdmin()
 }else {
  isNotAdmin()
 }
}


function isAdmin() {
  alert("ACCESS GRANTED")
}

function isNotAdmin() {
  alert("ACCESS DENIED")
}

checkPermission("ADMIN",isAdmin,isNotAdmin)
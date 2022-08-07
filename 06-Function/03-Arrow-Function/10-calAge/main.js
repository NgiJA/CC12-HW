let leapYear = (year) => {
  if(year % 100 == 0) {
    if(year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else if(year % 4 == 0) {
    return true;
  }
}



let ageDay = (bornYear) => {
  let day = 0;
  for(let i = bornYear; i <= 2020; i++) {
    if(leapYear(i)) {
      day = day + 366
    } else {
      day = day + 365
    }
  }
  return day;
}
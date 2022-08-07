function min(num_1, num_2) {
  if(isNaN(num_1) || isNaN(num_2)) {
    return "Please input only number";
  } else if (num_1 < num_2) {
    return num_1;
  } else if (num_2 < num_1) {
    return num_2;
  }
}
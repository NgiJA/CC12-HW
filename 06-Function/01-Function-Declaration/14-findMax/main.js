//Do myself
function max(num_1, num_2, num_3, num_4) {
  
  if(num_1 == undefined &&  num_2 == undefined && num_3 == undefined && num_4 == undefined) {
    return;
  } else if(num_1 > num_2 && num_1 > num_3 && num_1 > num_4) {
    return num_1;
  } else if(num_2 > num_1 && num_2 > num_3 && num_2 > num_4) {
    return num_2;
  } else if(num_3 > num_1 && num_3 > num_2 && num_3 > num_4) {
    return num_3;
  } else if(num_4 > num_1 && num_4 > num_2 && num_4 > num_3) {
    return num_4;
  } else if(num_1 > num_2 && num_1 > num_3 && num_4 == undefined) {
    return num_1;
  } else if(num_2 > num_1 && num_2 > num_3 && num_4 == undefined) {
    return num_2;
  } else if(num_3 > num_1 && num_3 > num_2 && num_4 == undefined) {
    return num_3;
  } else if(num_1 > num_2 && num_3 == undefined && num_4 == undefined) {
    return num_1;
  } else if(num_2 > num_1 && num_3 == undefined && num_4 == undefined) {
    return num_2;
  } else if(num_2 == undefined && num_3 == undefined && num_4 == undefined) {
    return +num_1;
  } else if(isNaN(num_1) || isNaN(num_2) || isNaN(num_3) || isNaN(num_4)) {
    return NaN;
  }
}





//Answer

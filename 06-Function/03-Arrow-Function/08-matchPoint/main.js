let calcScore = (result) => {
  if (result == "Win") {
    return 3;
  } else if (result == "Draw") {
    return 1;
  } else if (result == "Lose") {
    return 0;
  }
}
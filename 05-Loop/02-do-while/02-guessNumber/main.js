let answer = prompt('Player 1 : Enter Number');

if (+answer < 1 || +answer > 99) {
	alert('Invalid Range');
} else {
	// For Player 2
	let count = 0;
	let guess;
	do {
		guess = prompt('Player 2 : Enter Number');
		count++;
		if (guess == answer) {
			alert('Correct');
			alert(count);
		} else if (+guess < +answer && +guess > 0) {
			alert('Less than');
		} else if (+guess > +answer) {
			alert('More than');
		} else {
			alert('Please input number between 1-99');
		}
	} while (guess != answer);
}

/*
For USER 1
  GET number
  IF in range 1-99
    GO TO USER 2
  ELSE
    PRINT : Invalid range
    EXIT

FOR USER 1
  GET number
  IF out range 1-99
    PRINT : Invalid range
    EXIT
  ELSE
    Go to USER 2

*/

/*
For USER 2
  WHILE guess != answer
    GET guess from USER 2
    ADD cout 1
    IF guess = answer
      PRINT correct
    ESLE IF guess < answer
      PRINT less than
    ELSE IF guess > answer
      PRINT more than
    ELSE
  
*/

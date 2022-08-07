if (-1 || 0) alert("first"); // alert
// if(-1) --> เป็น true

if (-1 && 0) alert("second"); // not alert
// if(0) --> เป็น false

if (null || (-1 && 1)) alert("third"); // alert
// if(null || -1) --> if(-1) --> เป็น true
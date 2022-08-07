alert(null || 2 || undefined); //2
alert(alert(1) || 2 || alert(3));
//function alert() จะ return undefined
//ถ้า run ข้อนี้ จะ alert(1) ก่อน และ alert(2) และหยุด
//alert(undefined || 2 || ...) --> จบที่ 2
alert(1 && null && 2); //alert null
alert(alert(1) && alert(2));
//alert(false && ...) --> จบที่ alert(1) และ alert ค่า undefined
//alert จะ return เป็น undefined เสมอ
alert(null || (2 && 3) || 4);
//alert(null || 3 || 4) --> alert(3) และจบการทำงาน

function f() {
	alert('Hello!');
}

Function.prototype.defer = function (mSec) {
	setTimeout(f, mSec);
};

f.defer(1000);

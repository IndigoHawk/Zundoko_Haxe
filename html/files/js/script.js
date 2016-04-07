(function (console) { "use strict";
var Main = function() { };
Main.main = function() {
	var z = "(ง ̆ω ̆ )ว ⁾⁾  ｽﾞﾝ\n";
	var d = "(ง ̆ω ̆ )ڡ ⁾⁾ ﾄﾞｺ\n";
	var s = "";
	var a = [];
	while(a.join("") != z + z + z + z + d) {
		a.shift();
		if(Math.random() < 0.5) a[4] = z; else a[4] = d;
		s += a[4];
	}
	console.log(s + "乁( ˙ ω˙乁)　ｷ・ﾖ・ｼ !!");
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

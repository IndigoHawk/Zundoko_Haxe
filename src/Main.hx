class Main{
    static function main(){

		var z:String = "(ง ̆ ω ̆ )ว ⁾⁾  ｽﾞﾝ\n";
		var d:String = "(ง ̆ ω ̆ )ڡ ⁾⁾ ﾄﾞｺ\n";
		var s:String = "";
		var a:Array<String> = [];

		while(a.join("") != z+z+z+z+d) {
		  a.shift();
		  a[4] = Math.random() < 0.5 ? z : d;
		  s += a[4];
		}

		trace(s + "乁( ˙ ω˙乁)　ｷ・ﾖ・ｼ !!");

    }

}
����̖��

0-9�̏���𐶐����A�������ɂȂ�ׂ��Ƃ��ɁA100���ڂɂȂ������߂�B

var c = 0;
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var f = function(n, m){
  for(var i = 0; i < m.length; i++){
    var n2 = n + m[i];
    var m2 = m.slice(0);
    m2.splice(i, 1);
    if(m2.length == 0){
      c++;
      if(c == 1000000){
        console.log(n2);
      }
    }else{
      f(n2, m2);
    }
  }
}
f("", nums);
~
~

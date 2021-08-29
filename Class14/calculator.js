function addition(){
  var a = document.getElementById("a1").value;
  var b = document.getElementById('a2').value;
  var n1=parseInt(a);
  var n2=parseInt(b);

  if(n1>100){
    document.getElementById('a4').innerHTML='(Limit Cross)';
  }else {
    var c = n1+n2;
    document.getElementById('a3').innerHTML=c;
    document.getElementById('a4').innerHTML='(Addition)';
  }
}



function sub(){
  var a = document.getElementById("a1").value;
  var b = document.getElementById('a2').value;
  var n1=parseInt(a);
  var n2=parseInt(b);
  if(n1>100){
    document.getElementById('a4').innerHTML='limit cross';
  }else{
    var c= n1-n2;
    document.getElementById('a3').innerHTML=c;
    document.getElementById('a4').innerHTML='(Substraction)';
  }

}
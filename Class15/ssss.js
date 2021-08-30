function nameshow(){
  var a = document.getElementById("a1").value;
  a = parseInt(a);
  if(a==1){
    document.getElementById('a3').innerHTML='Numan';
  }else if(a==2){
    document.getElementById('a3').innerHTML='Amit';
  }else if(a==3){
    document.getElementById('a3').innerHTML='Badon';
  }else if(a==4){
    document.getElementById('a3').innerHTML='Juel';
  }else if(a==5){
    document.getElementById('a3').innerHTML='Irfan';
  }else {
    document.getElementById('a3').innerHTML='Thik tak goti capo';
  }
}
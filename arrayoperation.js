function a()
 {
  var res=[];
  var val=document.getElementById('val1').value;
  res=val.split(' ');
  document.getElementById('res').innerHTML=res;
 }
function b()
 {
  var res=[];
  var val=document.getElementById('val1').value;
  res=val.split(' ');
  document.getElementById('final').innerHTML=Math.max.apply(Math, res);
 }
function c()
 {
  var res=[];
  var val=document.getElementById('val1').value;
  res=val.split(' ');
  document.getElementById('final1').innerHTML=Math.min.apply(Math, res);
 }
function d()
 {
  var res=[];
  var val=document.getElementById('val1').value;
  res=val.split(' ');
  document.getElementById('final2').innerHTML=res.sort();
 }
function e()
 {
  var res=[];
  var val=document.getElementById('val1').value;
  res=val.split(' ');
  document.getElementById('final3').innerHTML=res.reverse(res.sort());
 }
function f()
 {
  var res=[];
  var val=document.getElementById('val1').value;
  res=val.split(' ');
  var val1=document.getElementById('src').value;
  document.getElementById('final4').innerHTML=res.indexOf(val1);
 }
function g()
 {
  var res=[];
  var res1=[];
  var val=document.getElementById('val1').value;
  res=val.split(' ');
  var rpl1=document.getElementById('rpl1').value;
  var rpl2=document.getElementById('rpl2').value;
  res1=res.replace(rpl1,rpl2);
  document.getElementById('final5').innerHTML=res1;
 }
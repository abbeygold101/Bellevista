var counter = 0;
var timeleft = 65;

function convertseconds(s){
  var min = floor(s /60);
  var sec = s % 60;
  return nf(min,2) +':' + nf(sec, 2);

}

function setup(){
nocanvas();

var timer = select('#timer');
timer.html(convertseconds(timeleft - counter));

function timeit() {
  counter++;
  timer.html(convertseconds(timeleft - counter));
}
setinterval(timeit,1000)
}

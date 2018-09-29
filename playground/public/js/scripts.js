// -- application
var sm = new TestControl();
sm.start();

var element = document.getElementById('hoge');
var counter = 0;

function step() {
  if (!sm.is_end())  
  {
    sm.update();
  }
  element.innerHTML = counter++;
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
//

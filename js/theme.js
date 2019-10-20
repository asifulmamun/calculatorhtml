// Get value from button
function insert(append){
	document.calculator.display.value += append;
}
// Delete one by one
function back(){
	var del = document.calculator.display.value;
	document.calculator.display.value = del.substring(0,del.length-1);
}
// Delete all
function clean(){
	document.calculator.display.value = "";
}
// Parcents equation
function parcent(per){
	document.calculator.display.value = (eval(document.calculator.display.value)/100);
}
// Main equation
function equal(){
	document.calculator.display.value = eval(document.calculator.display.value);
}

/*
	------------- Plugin Installed For Dragable --------------
	@ Source: https://www.w3schools.com/howto/howto_js_draggable.asp
	----------------------------------------------------------
*/
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Audio Function
function clickSound() { 
  document.getElementById("clickSound").play(); 
}
function welcome(){
  document.getElementById("welcome").play();
}
let nav = document.querySelector('nav');
const terminal = document.querySelector('.mainterminal');
const mainCont = document.querySelector('.cont');
const navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 100) {
        nav.classList.add('navbar-drop-shadow');
    } else {
        nav.classList.remove('navbar-drop-shadow');
    }
});

$('.cir-btn-three').click(()=>{
    terminal.style.display = "none"
})

setInterval(()=>{
    if(terminal.style.display = "none"){
        terminal.style.display = "block"
    }
}, 5000); 


//make Terminal Draggable

dragTerminal(document.querySelector('.main'));

function dragTerminal(elmnt) {
    var pos1 = 0; 
    var pos2 = 0; 
    var pos3 = 0;
    var pos4 = 0;
    if (document.getElementById(elmnt.id + "terminal")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "terminal").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
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
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }

}


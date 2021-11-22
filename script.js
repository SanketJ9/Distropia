let nav = document.querySelector('nav');
const terminal = document.querySelector('.terminal');
const closeBtn = document.querySelector('.cir-btn-three');
const mainCont = document.querySelector('.cont');

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark','shadow');
    } else {
        nav.classList.remove('bg-dark','shadow');
    }
});

/*
closeBtn.addEventListener("click", ()=>{
    terminal.style.display = "none"
})
setInterval(()=>{
    if(terminal.style.display = "none"){
        terminal.style.display = "block"
    }
}, 6000); */

/*
function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(terminal);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    terminal.style.left = `${left + movementX}vw`;
    terminal.style.top = `${top + movementY}vh`;
}

window.addEventListener("mousedown",()=>{
    mainCont.addEventListener("mousemove", onDrag);
})

window.addEventListener("mouseup",()=>{
    mainCont.removeEventListener("mousemove", onDrag);
})*/

terminal.addEventListener("mousedown", mousedown);

function mousedown(e) {
    window.addEventListener("mousemove",mousemove);
    window.addEventListener("mouseup",mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e){
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = terminal.getBoundingClientRect();

        terminal.style.left = rect.left - newX + "vw";
        terminal.style.top = rect.top - newY + "vh";

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup(e){
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
}
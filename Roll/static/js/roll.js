var demo = document.getElementById("rolldemo");
var demo1 = document.getElementById("rolldemo1");
var demo2 = document.getElementById("rolldemo2");
demo2.innerHTML = document.getElementById("rolldemo1").innerHTML;

function Marquee() {
    if (demo.scrollLeft - demo2.offsetWidth >= 0) {
        demo.scrollLeft -= demo1.offsetWidth;
    } else {
        demo.scrollLeft++;
    }
}
var myvar = setInterval(Marquee, 30);
demo.onmouseout = function() {
    myvar = setInterval(Marquee, 30);
}
demo.onmouseover = function() {
    clearInterval(myvar);
}
// show material box
function showMaterial() {
    var box = document.getElementById('show__mat__box');
    box.style.visibility = "visible";

    var bod = document.querySelector('body');
    bod.style.overflow = "hidden";
    document.body.scrollTop = document.documentElement.scrollHeight;
}

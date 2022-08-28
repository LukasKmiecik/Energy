/* table backgroud */
var x = document.getElementsByClassName("table_project");
var i;
for (i = 0; i < x.length; i++) {
    if(i%2) {
        x[i].style.backgroundColor = "#f1f1f1";
    }
}

/* table sn*/

var n =document.getElementsByClassName("t_sn");

var j;
for (j=0; j<n.length; j++) {
    n[j].innerText = j+1;
}
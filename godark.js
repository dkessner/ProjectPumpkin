var iframe = document.getElementById("editor");

//var x = iframe.contentWindow.document.getElementsByClassName("light");
var x = iframe.contentWindow.document.getElementsByTagName("body");
var i;
for (i = 0; i < x.length; i++) {
  x[i].className = "dark";
}

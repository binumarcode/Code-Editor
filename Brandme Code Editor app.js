

function run() {
const htmlCode = document.getElementById("HTML-code").value;
const cssCode = document.getElementById("CSS-code").value;
const jsCode = document.getElementById("JS-code").value;
const output = document.getElementById("output")

output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
output.contentWindow.eval(jsCode);

}
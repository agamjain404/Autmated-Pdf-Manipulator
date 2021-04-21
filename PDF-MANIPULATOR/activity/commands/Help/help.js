function helperfn(){
    console.log("List of all Commands is:- ");
    console.log("1. node main.js merge <dir-name>");
    console.log("2. node main.js compress <dir-name>");
    console.log("3. node main.js pdftoword <dir-name>");
    console.log("4. node main.js pdftoppt <dir-name>");
    console.log("5. node main.js pdftoexcel <dir-name>");
    console.log("6. node main.js wordtopdf <dir-name>");
    console.log("7. node main.js ppttopdf <dir-name>");
    console.log("8. node main.js exceltopdf <dir-name>");
    console.log("9. node main.js pdftojpg <dir-name>");
    console.log("10. node main.js jpgtopdf <dir-name>");
}
module.exports = {
    fn:helperfn
};
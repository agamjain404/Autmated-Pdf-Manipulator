function helperfn(){
    console.log("List of all Commands is:- ");
    console.log("---------------------------");
    console.log("Want to merge PDFs? Fire this command!");
    console.log("node main.js merge <dir-name>");
    console.log("---------------------------");
    console.log("Want to compress PDFs? Fire this command!");
    console.log("node main.js compress <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert PDF to WORD? Fire this command!");
    console.log("node main.js pdftoword <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert PDF to PPT? Fire this command!");
    console.log("node main.js pdftoppt <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert PDF to EXCEL? Fire this command!");
    console.log("node main.js pdftoexcel <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert WORD to PDF? Fire this command!");
    console.log("node main.js wordtopdf <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert PPT to PDF? Fire this command!");
    console.log("node main.js ppttopdf <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert EXCEL to PDF? Fire this command!");
    console.log("node main.js exceltopdf <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert PDF to JPG? Fire this command!");
    console.log("node main.js pdftojpg <dir-name>");
    console.log("---------------------------");
    console.log("Want to convert JPG to PDF? Fire this command!");
    console.log("node main.js jpgtopdf <dir-name>");
    console.log("---------------------------");
}
module.exports = {
    fn:helperfn
};
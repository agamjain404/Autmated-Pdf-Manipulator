// Read readme.md to understand the activity and to know how it will be executed

const input = process.argv.slice(2);
const helperfile = require("./commands/Help/help.js");
const converterFile = require("./commands/Converter/converter.js");

let command = input[0];
let folderPath = input[1];
switch(command){
    
    case "merge":
        // To merge two or more pdf
        // At a time at most 5 pdfs will be merged
        // So input folder should have atmost 5 pdfs and at least 2 pdfs
        converterFile.fn(input[0],input[1], 0);
        break;

    case "compress":
        // To compress two or more pdf
        // At a time at most 5 pdfs will be compressed
        // So input folder should have atmost 5 pdfs and at least 1 pdf
        converterFile.fn(input[0],input[1], 2);
        break;

    case "pdftoword":
        // To convert a pdf into doc file
        // Only one pdf can be converted at a time
        // So input folder should have only 1 pdf
        converterFile.fn(input[0],input[1], 3);
        break;

    case "pdftoppt":
        // To convert a pdf into ppt file
        // Only one pdf can be converted at a time
        // So input folder should have only 1 pdf
        converterFile.fn(input[0],input[1], 4);
        break;

    case "pdftoexcel":
        // To convert a pdf into excel file
        // Only one pdf can be converted at a time
        // So input folder should have only 1 pdf
        converterFile.fn(input[0],input[1], 5);
        break;

    case "wordtopdf":
        // To convert a doc file into pdf file
        // Only one doc can be converted at a time
        // So input folder should have only 1 doc
        converterFile.fn(input[0],input[1], 6);
        break;

    case "ppttopdf":
        // To convert a ppt into pdf file
        // Only one ppt can be converted at a time
        // So input folder should have only 1 ppt
        converterFile.fn(input[0],input[1], 7);
        break;

    case "exceltopdf":
        // To convert a excel into pdf file
        // Only one excel can be converted at a time
        // So input folder should have only 1 excel file
        converterFile.fn(input[0],input[1], 8);
        break;
    
    case "pdftojpg":
        // To convert a pdf into jpg file
        // At a time at most 5 pdfs will be converted
        // So input folder should have atmost 5 pdfs and at least 1 pdf
        converterFile.fn(input[0],input[1], 10);
        break;

    case "jpgtopdf":
        // To convert a jpg into pdf file
        // At a time at most 5 jpgs will be converted
        // So input folder should have atmost 5 jpg and at least 1 jpg
        converterFile.fn(input[0],input[1], 11);
        break;

    case "help":
        //In case you need to see list of commands then fire
        // node main.js help 
        helperfile.fn();
        break;

    default:
        // If you entered wrong commands then this will be your output
        console.log("Invalid command type help for all commands");
        break;
}
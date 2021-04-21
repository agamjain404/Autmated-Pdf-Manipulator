// Requiring modules
const fs = require("fs");
const path = require("path");

// Check if file or not
function isFileOrNot(src){
    return fs.lstatSync(src).isFile();
}

// If folder then read its all files
function readContent(src){
    return fs.readdirSync(src);
}

// will return path of all files present in folder
function getFilesPathfn(dirName){
    // Check if file or not
    let  isFile = isFileOrNot(dirName);

    // Array in which paths should be returned
    let pdfFilesArr = [];

    if(isFile == true){
        return "The entered path is a path of file. Please enter the path of folder which contains files to be operated.";
    }else{
        // Reading content of folder
        let filesInFolder = readContent(dirName);

        if(filesInFolder.length > 1){
            return "You can operate atmost 1 files only at a time. Please reduce the number of files in folder";
        }else if(filesInFolder.length == 0){
            return "You have no files in your folder. Please add some files";
        }else{
            // Getting all files one by one and pushing its path in pdfFilesArr
            let child = filesInFolder[0];
            let dirNamepath = path.join(dirName, child);
            pdfFilesArr.push(dirNamepath);
        }
    }
    // Returning the array
    return pdfFilesArr;
}

// Exports
module.exports = {
    fn:getFilesPathfn
};
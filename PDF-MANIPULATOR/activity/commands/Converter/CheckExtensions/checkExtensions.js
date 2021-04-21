// Check if a file is pdf or not
function isPdfOrNot(path){
    let ext = path.split(".").pop();
    if(ext == 'pdf'){
        return true;
    }
    return false;
}

// check if file is doc file or not
function isDocOrNot(path){
    let ext = path.split(".").pop();
    if(ext != 'doc' && ext != 'docx'){
        return false;
    }
    return true;
}

// check if file is ppt or not
function isPptOrNot(path){
    let ext = path.split(".").pop();
    if(ext != 'ppt' && ext != 'pptx'){
        return false;
    }
    return true;
}

// check if file is xls file or not
function isExcelOrNot(path){
    let ext = path.split(".").pop();
    if(ext != 'xls' && ext != 'xlsx'){
        return false;
    }
    return true;
}

// check if file is jpg or not
function isJpgOrNot(path){
    let ext = path.split(".").pop();
    if(ext != 'jpg' && ext != 'jpeg'){
        return false;
    }
    return true;
}

// Exports
module.exports = {
    checkPdf: isPdfOrNot,
    checkDoc: isDocOrNot,
    checkPpt: isPptOrNot,
    checkExcel: isExcelOrNot,
    checkJpg: isJpgOrNot
};
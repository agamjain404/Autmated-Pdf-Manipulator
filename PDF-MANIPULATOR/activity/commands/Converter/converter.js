// Requiring necessary modules
const puppeteer = require("puppeteer");
const path = require("path");
const getFilesPathMerge = require("./GetPaths/getPathsMerge.js");
const getFilesPathCompress = require("./GetPaths/getPathsCompress.js");
const getFilesPathPdfToAny = require("./GetPaths/getPathspdftoany.js");
const checExtensionFile = require("./CheckExtensions/checkExtensions.js")

// Variable which will have all tab information
let cTab;

// Function which merges pdf files
async function converterfn(query,dirName, operation){
    // try catch to handle errors
    try{
        // Launching browser
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });

        // Getting tabs of browser in a array
        let allTabsArr = await browser.pages();

        // Taking first tab to execute our script
        cTab = allTabsArr[0];

        // Going  to pdf website
        await cTab.goto("https://www.ilovepdf.com/");

        // Waiting and clicking on the paricular operation
        await cTab.waitForSelector(".tools__item__icon");
        await cTab.evaluate(getOperationClicked, ".tools__item__icon", operation);

        // Getting all the file paths present in the given folder
        let filesPath;
        let flag =true;
        if(query == "merge" ){
            filesPath = getFilesPathMerge.fn(dirName);
            // Check if it is returning array or not
            if(Array.isArray(filesPath)){
                // Check if all files present are pdf or not
                for(let i=0;i< filesPath.length; i++){
                    let isPdf = checExtensionFile.checkPdf(filesPath[i]);
                    if(isPdf == false){
                        flag = false;
                    }
                }
            }else{
                console.log(filesPath);
                await browser.close();
                return;
            }
        }else if(query == "compress" || query == "pdftojpg"){
            filesPath = getFilesPathCompress.fn(dirName);
            if(Array.isArray(filesPath)){
                for(let i=0;i< filesPath.length; i++){
                    let isPdf = checExtensionFile.checkPdf(filesPath[i]);
                    if(isPdf == false){
                        flag = false;
                    }
                }
            }else{
                console.log(filesPath);
                await browser.close();
                return;
            }
        }else if(query == "pdftoword" || query == "pdftoppt" || query == "pdftoexcel"){
            filesPath = getFilesPathPdfToAny.fn(dirName);
            if(Array.isArray(filesPath)){
                for(let i=0;i< filesPath.length; i++){
                    let isPdf = checExtensionFile.checkPdf(filesPath[i]);
                    if(isPdf == false){
                        flag = false;
                    }
                }
            }else{
                console.log(filesPath);
                await browser.close();
                return;
            }
        }else if(query == "wordtopdf"){
            filesPath = getFilesPathPdfToAny.fn(dirName);
            if(Array.isArray(filesPath)){
                // check if file present is a doc file or not
                let isDocs = checExtensionFile.checkDoc(filesPath[0]);
                if(isDocs == false){
                    flag = false;
                }
            }else{
                console.log(filesPath);
                await browser.close();
                return;
            }
        }else if(query == "ppttopdf"){
            filesPath = getFilesPathPdfToAny.fn(dirName);
            if(Array.isArray(filesPath)){
                // Check if file present is ppt or not
                let isDocs = checExtensionFile.checkPpt(filesPath[0]);
                if(isDocs == false){
                    flag = false;
                }
            }else{
                console.log(filesPath);
                await browser.close();
                return;
            }
        }else if(query == "exceltopdf"){
            filesPath = getFilesPathPdfToAny.fn(dirName);
            if(Array.isArray(filesPath)){
                // check if file present is excel or not
                let isDocs = checExtensionFile.checkExcel(filesPath[0]);
                if(isDocs == false){
                    flag = false;
                }
            }else{
                console.log(filesPath);
                await browser.close();
                return;
            }
        }else if(query == "jpgtopdf"){
            filesPath = getFilesPathCompress.fn(dirName);
            if(Array.isArray(filesPath)){
                // check if files present is jpg or not
                let isDocs = checExtensionFile.checkJpg(filesPath[0]);
                if(isDocs == false){
                    flag = false;
                }
            }else{
                console.log(filesPath);
                await browser.close();
                return;
            }
        }

        // If files present in filepaths is accurate then
        if(flag){
            // uploading the files one by one
            for(let i=0;i<filesPath.length; i++){
                await cTab.waitForSelector('input[type=file]');
                const inputUploadHandle = await cTab.$('input[type=file]');
                let fileToUpload = filesPath[i];
                inputUploadHandle.uploadFile(fileToUpload);
            }

            //waiting and Clicking on operation button
            await cTab.waitForSelector("#processTaskTextBtn");
            await cTab.click("#processTaskTextBtn");

            // waiting and clicking for download button
            await cTab.waitForSelector(".downloader__btn.active");
            await cTab.click(".downloader__btn.active");

            // Script executed successfully
            console.log("Task completed and should be downloading");
        }else{
            // If you have files in yur folder which cannot be uploaded
            console.log("Files present inside folder are not accurate");
            await browser.close();
        }
    }catch(err){
        console.log("Some error occured");
        await browser.close();
        return new Error(err);
    }
}

// To click on the operation which is to be executed
function getOperationClicked(selector, operation){
    let allOperations = document.querySelectorAll(selector);
    return allOperations[operation].click();
}



// Exports
module.exports = {
    fn: converterfn
};
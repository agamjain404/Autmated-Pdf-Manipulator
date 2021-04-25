# Autmated-Pdf-Manipulator

* Make sure to run these commands before running this script
 
 # npm install puppeteer
 # npm install fs
 # npm install path
 
 and then run project in activity folder with command
 
 # node main.js "operation-name" "dir-path"

# FAQs

Q. What is the work of this project?


Ans. This is a automated pdf manipulator and converter which merges at least 2 and at most 5 pdfs in one go.
    Instead of merging we can also do several other operations like compress pdf, convert pdf to doc file or ppt file or jpg file or excel file.
    With the help of this project we can also convert doc file or ppt file or jpg file or excel file to pdf.
    
Q. How does this project works?

Ans. The work is done with the help of automation. As a input we had to provide operation name and folder's path which contains files to be operated.


    -> Merge PDF
      If you are doing merge operation then there should be at least 2 pdfs and at most 5 pdfs available in the provided folder.
      Otherwise it will terminate the script and returns a statement which makes us understood that what fault is occured.
      If all goes okay, then it will download the merged pdf in your downloads folder
      
    -> Compress PDF
      If you are doing compress operation then there should be at least 1 pdf and at most 3 pdfs available in the provided folder.
      If there is only 1 pdf then script will download the compressed pdf and if there are more then 1 pdf present then it will  download a 
      zip file containing all the compressed pdfs.
      
    -> PDF to PPT
      There must be atleast one pdf file and atmost one pdf file present in the provided folder to make it work properly.
      
    -> PDF to WORD
      There must be atleast one pdf file and atmost one pdf file present in the provided folder to make it work properly.
      
    -> PDF to EXCEL
      There must be atleast one pdf file and atmost one pdf file present in the provided folder to make it work properly.
      
    -> PDF to JPG
      In this operation folder must contain at least one pdf and at most 3 pdf to make it work properly.
      
    -> JPG to PDF
      In this operation folder must contain at least one jpg or jpeg file and at most 3 jpg or jpeg files to make it work properly.
      
    -> WORD to PDF
      There must be atleast one doc or docx file and atmost one doc or docx file present in the provided folder to make it work properly.
      
    -> PPT to PDF
      There must be atleast one ppt or pptx file and atmost one ppt or pptx file present in the provided folder to make it work properly.
      
    -> EXCEL to PDF
      There must be atleast one xls or xlsx file and atmost one xls or xlsx file present in the provided folder to make it work properly.
      
    -> HELP
      I worte a help function there which can be executed using this command
              
              #node main.js help
              
      This command will give you the syntax of all the commands.

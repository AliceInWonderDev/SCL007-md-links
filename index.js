#!/usr/bin/env node

const mdLinks = require('./modulo.js');
let anyDocument = process.argv[2];
const options= process.argv[3];

if(require.map===module)
mdLinks(ruta, opcion);
























// fs.readdir(anyDocument, function(error, list){
//             if(error){
//                 console.log(error);
//             }
//             list.forEach(function(files){
//                 if(fs.lstatSync(files).isDirectory()){
//                     return mdLinks.readDirectory(files);
//                 }
//                 if(fs.lstatSync(files).isFile()){
//                     return mdLinks.readFile(files);
//                 }
//                 console.log(files);
//             })
//         })

//-------------------------------------------------------
// let markdown = fs.readFileSync(anyDocument).toString();
// let link = markdownLinkExtractor(markdown);
// link.forEach(function (link) {
//     console.log(link);
// });

// for(let i=0; i < link.length; i++){
//     if(link === true){   
//     }
// }


//-------------------------------------------------------
// let mdLinks = {}

// mdLinks.readDirectory = (anyDocument) => {

//     fs.readdir(anyDocument, function(error, list){
//         if(error){
//             console.log(error);
//         }
//         list.forEach(function(files){
//             if(fs.lstatSync(files).isDirectory()){
//                 return mdLinks.readDirectory(files);
//             }
//             if(fs.lstatSync(files).isFile()){
//                 return mdLinks.readFile(files);
//             }
//             console.log(files);
//         })
//     })

// }

// mdLinks.readFile = (anyDocument) => {
//     fs.readFile(anyDocument, function(error, file){
//         if (error){
//             console.log(error);
//         }
//         file.forEach(function(files){

//         })
//     })
// }


// function getData(anyDocument, type) {
//     return new Promise(function(resolve, reject){
//       fs.readFile(anyDocument, type, (err, data) => {
//           err ? reject(err) : resolve(data);
//       });
//     });
    
//   } 
// var rd = readline.createInterface({
//     input: fs.createReadStream('anyDocument'),
//     output: process.stdout,
//     console: false
// });

// rd.on('line', function(line) {
//     console.log(line);
// });

//  let fs = require('fs');
//  let path = require('path');
// //Return the extension:
// var ext = path.extname('README.md');
// console.log(ext);

// fs.readFile('./README.md', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// if (dirEntry.isDirectory === true){
// // See the section on FileEntry for other inherited properties/methods.
//     var dirReader = dirEntry.createReader();
//     dirEntry.getFile(path, error());
//     dirEntry.getDirectory(path, error);
//     dirEntry.removeRecursively(successCallback, error);
// }else{
//     console.log(error);
// }
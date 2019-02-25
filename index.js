#!/usr/bin/env node

//  let fs = require('fs');
//  let path = require('path');
// //Return the extension:
// var ext = path.extname('README.md');
// console.log(ext);

// const fs = require('fs');
// const path = require('path');
// readFile = require('readFile');

// fs.readFile('./README.md', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

let fs = require('fs');
let fetch = require('node-fetch');
let path = require('path');
let anyDocument = process.argv[2];
readline = require('readline');


// if (dirEntry.isDirectory === true){
// // See the section on FileEntry for other inherited properties/methods.
//     var dirReader = dirEntry.createReader();
//     dirEntry.getFile(path, error());
//     dirEntry.getDirectory(path, error);
//     dirEntry.removeRecursively(successCallback, error);
// }else{
//     console.log(error);
// }



    let markdownLinkExtractor = require('markdown-link-extractor');

    var markdown = fs.readFileSync(anyDocument).toString();

    let link = markdownLinkExtractor(markdown);

    link.forEach(function (link) {
        console.log(link);
    });
    



var rd = readline.createInterface({
    input: fs.createReadStream('anyDocument'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    console.log(line);
});
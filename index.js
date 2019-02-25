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
// let fetch = require('fetch');
let path = require('path');
let anyDocument = process.argv[2];

for(let i=0; i < anyDocument; i++){
    if (dirEntry.isDirectory === true){
// See the section on FileEntry for other inherited properties/methods.

        var dirReader = dirEntry.createReader();
        dirEntry.getFile(path, opt_flags, opt_successCallback, opt_errorCallback);
        dirEntry.getDirectory(path, opt_flags, opt_successCallback, opt_errorCallback);
        dirEntry.removeRecursively(successCallback, opt_errorCallback);
    console.log(dirReader);
    }
}


let markdownLinkExtractor = require('markdown-link-extractor');

var markdown = fs.readFileSync(anyDocument).toString();

let link = markdownLinkExtractor(markdown);

link.forEach(function (link) {
    console.log(link);
});

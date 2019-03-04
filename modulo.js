let fs = require('fs');
let fetch = require('node-fetch');
let path = require('path');
let anyDocument = process.argv[2];
let ruta = path.resolve(anyDocument);
let chalk = require('chalk');


let mdLinks = (ruta, options = {validate:false}) =>{
    let markdownLinkExtractor = require('markdown-link-extractor');
    let stats = fs.statSync(ruta);
    let extension = path.extname(ruta)
    
    if(extension === '.md'){
    let markdown = fs.readFileSync(ruta).toString();
    let links = markdownLinkExtractor(markdown);
    let arrayFetch = [];
    //recorrer lineas
    for(let i=0; i < links.length; i++){
        const text = links[i].text;
        const url= links[i];
    //mostrar cuales estan rotos
    let linkFetch = fetch(links[i])
        .then(res=>{
        if(process.argv[3] === '--validate'){
            let infoLinks = {
                link:res.url,
                texto: text,
                ruta: ruta,
                status:res.status,
                statusText: res.statusText  
            };
            return infoLinks;
        }else{
            let infoLinks = {
                links:res.url,
                texto: text,
                ruta: ruta
            }
            return infoLinks;
        }    
        })
        .catch(error =>{
            let fail = {
                urlLink: url,
                satusLink:"error",
            }
            return fail;   
        })
        arrayFetch.push(linkFetch);
    }

    return Promise.all(arrayFetch);

    }else if(stats.isDirectory()=== true){
        let recursividad = fs.readdirSync(ruta)
        return(Promise.all(recursividad.map(elemento =>{
        let recur = path.join(ruta, elemento)
        return mdLinks(recur)
    })))
    }else{
        console.log(chalk.red('El archivo debe ser en formato .md'));
    }
    
};
mdLinks(ruta).then(console.log);

module.export = mdLinks;


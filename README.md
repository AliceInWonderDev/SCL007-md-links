## *MD-LINKS*


### INTRODUCCIÓN

Bienvenido a "*md-links*", el cual, es un modulo que ha sido diseñado para extraer los links de un archivo .md (archivos de texto plano), y así verificar que estos se encuentren funcionando, es decir, que no sea un link roto.

### ¿CÓMO INSTALAR EL MÓDULO?
Abrir la terminal desde la carpeta del proyecto donde se quiere instalar el módulo, o en su defecto, abrir la carpeta del proyecto desde la terminal con los comandos necesarios (ejemplo: cd,ls, etc.)
Además, existen dos formas de instalarlo, de manera local y de manera general, las cuales se explicarán a continuación:

### local

npm install --save https://github.com/AliceInWonderDev/SCL007-md-links

### global

npm install --save https://github.com/AliceInWonderDev/SCL007-md-links -g


### ¿CÓMO USARLO COMO MÓDULO?
*md-links* devuelve una promesa con un resultado que corresponde a un arreglo de objetos, donde cada objeto es un link.

### Cada Link contiene lo siguiente:

  - link: contiene la url.
  - texto: Indica el texto que acompaña el link.
  - ruta: Es la ruta absoluta de donde se extrajo el link

### --validate

Cuando le agregamos *--validate* en la terminal, nos muestra un link que contiene lo siguiente:

  - link: Contiene la url.
  - texto: Indica el texto que acompaña el link.
  - ruta: Es la ruta absoluta de donde se extrajo el link
  - status: Muestra el número 200 si el link sirve y 404 si el link está roto.
  - statusText: Muestra un 'OK' si el link sirve o un 'Fail' si está roto.


### EJEMPLO DE USO EN TERMINAL

Escribir en la terminal:

node [nombre de la carpte a analizar] --validate.

Y mostrará algo así:

[ { 
    link:  https://github.com/AliceInWonderDev/SCL007-md-links,

    texto: Link de Github,
    ruta: https://github.com/AliceInWonderDev/SCL007-md-links
    status: 200
    statusText: Ok }
  { link: 'https://github.com/AliceInWonderDev/SCL007-md-links',
  
    texto: Link de Github,
    ruta: https://github.com/AliceInWonderDev/SCL007-md-links
    status: 200
    statusText: Ok }]

### SI RETORNA UN ARREGLO VACÍO

*md-links* puede retornar una promesa con un resultado vacío cuando:

* La ruta ingresada no es valida.
* La ruta ingresada no correspondía a un archivo md.
* La ruta ingresada no contenia links en los archivos md analizados.